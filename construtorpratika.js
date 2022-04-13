function Youtube(video) {
    this.video = video
    this.play = ()=>{
        return 'esse video é massa: ' + this.video
    }
}
const shivers = new Youtube('Shivers')
console.log(shivers.play())