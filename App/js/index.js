// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image5")
                .setLeft("2.2857142857142856em")
                .setTop("0.7619047619047619em")
                .setWidth("9.371428571428572em")
                .setHeight("7.847619047619047em")
                .setSrc("https://th.bing.com/th/id/OIP.m0nEObPy1Zh-T8T0OD-LOQHaHa?rs=1&pid=ImgDetMain")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label7")
                .setLeft("9.142857142857142em")
                .setTop("3.8095238095238093em")
                .setWidth("13.104761904761904em")
                .setHeight("5.0285714285714285em")
                .setCaption("Baolara Executor Free")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button3")
                .setLeft("23.61904761904762em")
                .setTop("3.0476190476190474em")
                .setCaption("Status Button")
                .setType("status")
                .setValue(true)
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input22")
                .setLeft("2.2857142857142856em")
                .setTop("9.142857142857142em")
                .setWidth("55.31428571428572em")
                .setHeight("10.742857142857142em")
                .setLabelSize("8em")
                .setMultiLines(true)
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button10")
                .setLeft("54.095238095238095em")
                .setTop("20.571428571428573em")
                .setCaption("Inject")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "other",
                        "target" : "msg",
                        "args" : [
                            "Inject Note",
                            "The app has been Injected into Roblox !"
                        ],
                        "method" : "pop",
                        "event" : 1
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput3")
                .setLeft("22.095238095238095em")
                .setTop("20.571428571428573em")
                .setWidth("9.6em")
                .setLabelSize("8em")
                .setLabelCaption("Open")
                .setType("file")
            );
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel4")
                .setDock("none")
                .setLeft("1.5238095238095237em")
                .setTop("20.571428571428573em")
                .setCaption("Panel")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button12")
                .setTheme("pro")
                .setLeft("13.714285714285714em")
                .setTop("20.571428571428573em")
                .setWidth("10.59047619047619em")
                .setCaption("Execute Now")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button15")
                .setLeft("46.476190476190474em")
                .setTop("3.0476190476190474em")
                .setWidth("8.228571428571428em")
                .setCaption("Roblox Scripts")
                .setImageClass("https://th.bing.com/th/id/R.213cd81ba2d6b1ea8a15c6fbcd4096be?rik=IStUAIpvnpypcA&pid=ImgRaw&r=0")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "other",
                        "target" : "url",
                        "args" : [
                            "https://scriptblox.com/paste/"
                        ],
                        "method" : "mailTo",
                        "event" : 1
                    }
                ])
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});