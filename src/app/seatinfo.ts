export class Seatinfo {
    
    public seatNum: String;
    public isSelected: boolean;

    constructor(seatNum: String, isSelected: boolean) {
        this.seatNum = seatNum;
        this.isSelected = isSelected;
    }
}
