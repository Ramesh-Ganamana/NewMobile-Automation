const { $, driver } = require("@wdio/globals");
const assert = require("assert");




class loginpage{

    CrossUpdateButton(){
        return $(`//android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.ImageView`);
    }
    Tonzcontactsallow(){
        return $(`//android.widget.Button[@resource-id='com.android.permissioncontroller:id/permission_allow_button']`);
    }
    Tonzmcusicallow(){
        return $(`//android.widget.Button[@resource-id='com.android.permissioncontroller:id/permission_allow_button']`);
    }
    Tonznotificationallow(){
        return $(`//android.widget.Button[@resource-id='com.android.permissioncontroller:id/permission_allow_button']`);
    }
    HomeButton(){
        return $(`//android.view.View/android.view.View/android.view.View/android.view.View[5]/android.view.View/android.view.View[1]//android.widget.TextView`);
    }   
    RingtoneButton(){
        return $(`//android.view.View/android.view.View/android.view.View/android.view.View[5]/android.view.View/android.view.View[2]//android.widget.TextView`); 
    }
    BrowseButton(){
        return $(`//android.view.View/android.view.View/android.view.View/android.view.View[5]/android.view.View/android.view.View[3]//android.widget.TextView`);
    }
    LoginRegisterButton(){
        return $(`//android.view.View[4]/android.widget.Button[1]`); 
    }
    SongsScreen(){
        return $(`(//android.view.View/android.view.View/android.view.View/android.view.View)[2]/android.view.View[1]//android.view.View`);
    }

    async Login(){
     await browser.pause(5000);
     if(await this.CrossUpdateButton().isDisplayed()){
        await this.CrossUpdateButton().click();
        await this.Tonzcontactsallow().click();
        await this.Tonzmcusicallow().click();
        await this.Tonznotificationallow().click(); 
        await this.HomeButton().click();
        await this.RingtoneButton().click();
        await this.LoginRegisterButton().click();     
        await browser.pause(10000);
        // await browser.performActions([
        //     {
        //       type: 'pointer',
        //       id: 'finger1',
        //       parameters: { pointerType: 'touch' },
        //       actions: [
        //         { type: 'pointerMove', duration: 100, x: 545, y: 615 },
        //         { type: 'pointerDown', button: 0 },
        //         { type: 'pause', duration: 500 },
        //         { type: 'pointerMove', duration: 100, x: -558, y: -1609 },
        //         { type: 'pointerUp', button: 0 }
        //       ]
        //     }
        //   ]);
          
        // await browser.pause(5000);
        assert.strictEqual(await this.SongsScreen().isDisplayed(), true, 'Element should be displayed');
        
    }
     else{
          await browser.pause(2000);
          await this.Tonzcontactsallow().click();
          await this.Tonzmcusicallow().click();
          await browser.pause(1000);
          await this.Tonznotificationallow().click();
          //await this.CrossUpdateButton().click();
          await this.HomeButton().click();
          await this.RingtoneButton().click();
          await this.LoginRegisterButton().click();
          await browser.pause(10000);
         assert.strictEqual(await this.SongsScreen().isDisplayed(), true, 'Element should be displayed');
    }
}
}
module.exports=new loginpage();