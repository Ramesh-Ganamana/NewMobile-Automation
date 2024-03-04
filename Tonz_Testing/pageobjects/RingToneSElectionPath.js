const { $, driver } = require("@wdio/globals");
const assert = require("assert");

class RingTonePath{

    SongSelection(i){
        return $(`(//android.view.View/android.view.View/android.view.View/android.view.View)[2]/android.view.View[${i}]/android.view.View`)
    }
    SongPicking(){
        return $(`(//android.view.View/android.view.View/android.view.View/android.view.View)[2]/android.view.View[1]/android.view.View`)
    }
    SetringtoneButton(){
        return $(`//android.view.View[@content-desc="Skip Next"]/parent::android.view.View/following-sibling::android.view.View/android.widget.Button`)
    }
    SetasDefaultRingToneButton(){
        return $(`//android.view.View/android.view.View/android.view.View[4]/android.widget.Button`)
    }
    DefaultRingTonePlayButton(){
        return $(`//android.view.View[3]/android.widget.Button`);
    }
   
    async UserRingTone(){
    //     for (let i = 1; i < 20; i++) {
    //         var info = this.SongSelection(i);
    //     let data=await this.info.isDisplayed();
    //    assert.strictEqual(data, true, 'Element is not displayed');
    //     }
    await this.SongPicking().click();
    await browser.pause(1000);
    await this.SetringtoneButton().click();
    await browser.pause(10000);
    await this.SetasDefaultRingToneButton().click();
    await browser.pause(10000);
    await this.DefaultRingTonePlayButton().click();
    await browser.pause(5000)

    }
    
}
module.exports =new RingTonePath();