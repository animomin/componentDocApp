export class Person {
    avatar : string = "";
    name : string = "";
    detail : string = "";
    story : string = "";

    constructor(avatar, name, detail, story = ''){
        this.avatar = avatar;
        this.name = name;
        this.detail = detail;
        this.story = story;
    }
}