//List of Object In Local Storage = LOILS
const soundfile = require("./assets/sounds/beep.mp3");

export function transformListOfStringfiedObjectsIntoArray(stringfiedObjectList) {
    if (!stringfiedObjectList)
        return;

    stringfiedObjectList = stringfiedObjectList.split("}");
    stringfiedObjectList = stringfiedObjectList.map((one, index) => {
        if (index > 0)
            one = one.substr(1);
        return one + "}";
    });
    stringfiedObjectList.pop();
    stringfiedObjectList = stringfiedObjectList.map(stringTimer => JSON.parse(stringTimer));
    return stringfiedObjectList;
}

export function deleteItemLOILS(keyValue,identifier){
    let list = transformListOfStringfiedObjectsIntoArray(localStorage.getItem(keyValue))
    list.splice(identifier,identifier + 1);
    insertItemLOILS(keyValue,list);
}

export function insertItemLOILS(keyValue,list){
    list = list.map(item => JSON.stringify(item));            
    localStorage.setItem(keyValue,list.join());
}

export class Notify {
    static audioList = [];
    static idList = [];

    static volume = 0.4;
    static loop = true;
    // ID: string, audioElement: HTMLAudioElement -> void

    static _factoryAudio() {
      if (!soundfile)
        return;
      
      let audio = new Audio(soundfile);
      audio.loop = this.loop;
      audio.volume = this.volume;
      audio.playbackRate = 8
      return audio;
    }

    static run(ID,soundfile) {
      let audioElement = Notify._factoryAudio(soundfile);

      if (!audioElement?.paused) return;

      if (this.idList.some(value => value === ID)) return;

      audioElement.dataset.id = ID;
      this.idList.push(ID);
      this.audioList.push(audioElement);
      
      if (this.audioList.length > 1) {
        let pr = new Promise((resolve, reject) => {
          let varas = setInterval((function() {
            console.log("INTERVAL:",this.audioList)
            if (this.audioList.length > 0) {
              let index = this.audioList.findIndex(
                audioEl => audioEl.dataset.id === String(ID)
              );
              if (index === 0) {
                console.log(
                  "The element was paused,therefore opening the channel"
                );

                this.audioList[0].play();

                resolve(varas);
              } else if (index === -1) resolve(varas);
            }
          }).bind(this), 1000);
        });

        pr.then(clearInterval);
      } else {
        audioElement.play();
      }
    }

    // ID:string -> void
    static stop(ID) {
      console.log(this.audioList);
      let index = this.audioList.findIndex(audio => audio.dataset.id === ID);
      if (this.audioList[index]) {
        this.audioList[index].pause();
        this.audioList.splice(index, index + 1);
        this.idList.splice(index, index + 1);
      }
    }
  }
