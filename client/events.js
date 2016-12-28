Template.dropdown.events({
  
    
  'click .lang-french':function(event, template) {
       console.log(' French selected !');
   
      var french = 'fr';
     TAPi18n.setLanguage(french);
  //  i18n.setLanguage(fr);
      
  },
    'click .lang-english':function(event, template) {
         console.log(' English selected !');
       var english = 'en';
         TAPi18n.setLanguage(english);
   // i18n.setLanguage(en);
  },
    'click .lang-german':function(event, template) {
         console.log(' German selected !');
        var german = 'de';
         TAPi18n.setLanguage(german);
    //i18n.setLanguage(de);
  },
    'click .lang-spanish':function(event, template) {
         console.log(' Spanish selected !');
         var spanish = 'es';
         TAPi18n.setLanguage(spanish);
    //i18n.setLanguage(es);
  },
    'click .lang-chinese':function(event, template) {
        console.log(' Chinese selected !');
       var chinese = 'zh';
         TAPi18n.setLanguage(chinese);
    //i18n.setLanguage(zh);
  },
    'click .lang-arabic':function(event, template) {
         console.log(' Arabic selected !');
         var arabic = 'ar';
         TAPi18n.setLanguage(arabic);
   // i18n.setLanguage(ar);
 }
});
