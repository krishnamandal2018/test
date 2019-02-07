//Help Desk User Login
function HelpDeskUser_Login()
{

        var Excel, userId,pass;
        Excel = Sys.OleObject("Excel.Application");
        Delay (3000); 
        // Wait until Excel starts
        Excel.Visible = true;
        Excel.Workbooks.Open("C:\\Users\\Krishna\\Desktop\\OCRonWEBVer1.2Script\\Master.xlsx"); 
 
        //TestedApps.https___st_rbpocloud_com.Run();
        userId=VarToString(Excel.Cells.Item(4,2));
       var url=VarToString(Excel.Cells.Item(1,6)); 
        Browsers.Item(btChrome).Run(url);
        Aliases.browser.pageOcronwebtestautomation9767752.form.textboxTxtusername.SetText(userId);
        //Clicks the 'submitbuttonBtnlogin' button.
        Aliases.browser.pageOcronwebtestautomation9767752.form.submitbuttonBtnlogin.ClickButton();
       Delay(5000);
        var User=Sys.Browser("chrome").Page(url+"/App_GeneralFunction/FS00004/FS00004002.aspx?sid=ow&svc=oow&lang=ja-JP").Panel("bd_inner").Panel("build_menu_page").Form("fm").Panel("phFormArea_headerArea").Panel(0).Panel(1).Link(0).TextNode("phFormArea_phHeaderMenuArea_headerMenu_ltrUserId").textContent;
Delay(5000);
        if(User==userId)
        {
          Log.Message("Login Successfull with :"+userId);
          Log.Checkpoint("Login Successfull");
        }
        else
        Log.Error("Login Failed");
        
}