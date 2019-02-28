!function(){"use strict";angular.module("angularMaterialKitchenSink",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ui.router","ngMaterial","ngMdIcons","toastr"]).directive("jnList",[function(){return{restrict:"E",scope:{data:"=",options:"="},templateUrl:"jn_list.html",link:function(t,e,a){t.options.columns&&(t.columnCount=Object.keys(t.options.columns).length)}}}])}(),function(){"use strict";function t(){function t(t){var e=this;e.relativeDate=t(e.creationDate).fromNow()}t.$inject=["moment"];var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return e}angular.module("angularMaterialKitchenSink").directive("acmeNavbar",t)}(),function(){"use strict";function t(){function t(){return e}var e=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Angular Material Design",url:"https://material.angularjs.org/#/",description:"The Angular reference implementation of the Google's Material Design specification.",logo:"angular-material.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=t}angular.module("angularMaterialKitchenSink").service("webDevTec",t)}(),function(){"use strict";function t(t){function e(e,a,n,i){var o,r=t(a[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});a.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(t){r.type(t).pause()["delete"]()}),o=e.$watch("vm.contributors",function(){angular.forEach(i.contributors,function(t){r.type(t.login).pause()["delete"]()})}),e.$on("$destroy",function(){o()})}function a(t,e){function a(){return n().then(function(){t.info("Activated Contributors View")})}function n(){return e.getContributors(10).then(function(t){return i.contributors=t,i.contributors})}var i=this;i.contributors=[],a()}a.$inject=["$log","githubContributor"];var n={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:e,controller:a,controllerAs:"vm"};return n}t.$inject=["malarkey"],angular.module("angularMaterialKitchenSink").directive("acmeMalarkey",t)}(),function(){"use strict";function t(t,e){function a(a){function i(t){return t.data}function o(e){t.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))}return a||(a=30),e.get(n+"/contributors?per_page="+a).then(i)["catch"](o)}var n="https://api.github.com/repos/Swiip/generator-gulp-angular",i={apiHost:n,getContributors:a};return i}t.$inject=["$log","$http"],angular.module("angularMaterialKitchenSink").factory("githubContributor",t)}(),function(){"use strict";function t(t,e){t.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0}t.$inject=["$logProvider","toastrConfig"],angular.module("angularMaterialKitchenSink").config(t)}(),function(){"use strict";function t(t){t.theme("default").primaryPalette("cyan",{"default":"400","hue-1":"100","hue-2":"600","hue-3":"A100"}).accentPalette("amber").warnPalette("red").backgroundPalette("grey")}t.$inject=["$mdThemingProvider"],angular.module("angularMaterialKitchenSink").config(t)}(),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("angularMaterialKitchenSink").run(t)}(),function(){"use strict";function t(t,e){t.state("home",{url:"/",templateUrl:"app/home/home.html",controller:"HomeController",controllerAs:"home"}).state("tech",{url:"/tech",templateUrl:"app/tech/tech.html",controller:"TechController",controllerAs:"tech"}).state("part1",{url:"/part1",templateUrl:"app/part1/part1.html",controller:"Part1Controller",controllerAs:"part1"}).state("part2",{url:"/part2",templateUrl:"app/part2/part2.html",controller:"Part2Controller",controllerAs:"part2"}).state("part3",{url:"/part3",templateUrl:"app/part3/part3.html",controller:"Part3Controller",controllerAs:"part3"}).state("part4",{url:"/part4/:video",templateUrl:"app/part4/part4.html",controller:"Part4Controller",controllerAs:"part4"}).state("part5",{url:"/part5/:video",templateUrl:"app/part5/part5.html",controller:"Part5Controller",controllerAs:"part5"}).state("part6",{url:"/part6/:video",templateUrl:"app/part6/part6.html",controller:"Part6Controller",controllerAs:"part6"}).state("autocomplete",{url:"/autocomplete",templateUrl:"app/autocomplete/autocomplete.html",controller:"AutocompleteController",controllerAs:"autocomplete"}).state("button",{url:"/button",templateUrl:"app/button/button.html",controller:"ButtonController",controllerAs:"button"}),e.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("angularMaterialKitchenSink").config(t)}(),function(){"use strict";function t(t){t.iconSet("social","bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-social.svg",24).defaultIconSet("img/icons/sets/core-icons.svg",24)}t.$inject=["$mdIconProvider"],angular.module("angularMaterialKitchenSink").config(t)}(),function(){"use strict";angular.module("angularMaterialKitchenSink").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function t(t,e){var a=this;a.source=e.video}t.$inject=["$http","$stateParams"],angular.module("angularMaterialKitchenSink").controller("Part6Controller",t)}(),function(){"use strict";function t(t,e,a){function n(){o(),t(function(){r.classAnimation="rubberBand"},4e3)}function i(){a.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),r.classAnimation=""}function o(){r.awesomeThings=e.getTec(),angular.forEach(r.awesomeThings,function(t){t.rank=Math.random()})}var r=this;r.awesomeThings=[],r.classAnimation="",r.creationDate=1472603796345,r.showToastr=i,n()}t.$inject=["$timeout","webDevTec","toastr"],angular.module("angularMaterialKitchenSink").controller("TechController",t)}(),function(){"use strict";function t(t,e){var a=this;a.data=[],a.findVideos=function(){var e="/api/transformed";t({method:"GET",url:e}).then(function(t){a.data=t.data},function(t){a.status=t.status,alert(a.status+"ERROR")})},a.listOptions={title:"Videos Amplified",noDataMessage:"You have no campaigns within this time range.",columns:{Video:"item"}},a.selectTransformedVideo=function(t){e.go("part6",{video:t})},a.findVideos()}t.$inject=["$http","$state"],angular.module("angularMaterialKitchenSink").controller("Part5Controller",t)}(),function(){"use strict";function t(t,e){var a=this;a.data=[],a.job_id="XXX",a.findVideos=function(){var e="/api/mail/videos";t({method:"GET",url:e}).then(function(t){a.data=t.data},function(t){a.status=t.status,alert(a.status+"ERROR")})},a.listOptions={title:"Videos Received",noDataMessage:"You have no campaigns within this time range.",columns:{Video:"item._id",Campaign:"item.campaign",Name:"item.name",Email:"item.email","Date Sent":"item.created_at","Date Received ":"item.received"}},a.transformMP4=function(){var e="/api/mp4/"+a.video;t({method:"GET",url:e}).then(function(t){alert("transformed to mp4")},function(t){a.status=t.status,alert(a.status+"ERROR")})},a.sendToAI=function(){var e="/api/ai/"+a.video;t({method:"GET",url:e}).then(function(t){a.job_id=t.data,alert("received from AI interface: Job ID is "+a.job_id)},function(t){a.status=t.status,alert(a.status+"ERROR")})},a.getJobs=function(){var e="/api/jobs/";t({method:"GET",url:e}).then(function(t){alert("Jobs are: "+t.data)},function(t){a.status=t.status,alert(a.status+"ERROR")})},a.getJobResults=function(){alert("getting job results");var e="/api/job_results/"+a.job_id;t({method:"GET",url:e}).then(function(t){alert("Job Status : "+t.data.status)},function(t){a.status=t.status,alert(a.status+"ERROR")})},a.getJobStatus=function(){var e="/api/job_status/"+a.job_id;t({method:"GET",url:e}).then(function(t){alert("Job Status : "+t.data.status)},function(t){a.status=t.status,alert(a.status+"ERROR")})},a.showVideo=function(t){a.video=t;var e=document.getElementById("video-1"),n=document.getElementById("videoSrc");e.pause();var i="https://ziller2.dyndns.org:9001/uploads/"+t;n.setAttribute("src",i),e.load()},a.findVideos()}t.$inject=["$http","$state"],angular.module("angularMaterialKitchenSink").controller("Part3Controller",t)}(),function(){"use strict";function t(t,e){var a=this;a.source=e.video,a.eulerParams={video:a.source,noPyramids:5,freqMin:.6,freqMax:1,amplification:50},a.eulerAmpVideo=function(){var e="/api/euler";t({method:"post",url:e,data:a.eulerParams}).then(function(t){a.data=t.data},function(t){a.status=t.status,alert(a.status+" Error")})}}t.$inject=["$http","$stateParams"],angular.module("angularMaterialKitchenSink").controller("Part4Controller",t)}(),function(){"use strict";function t(t,e){var a=this;a.loadTable=function(){var e="/api/mail/data";t({method:"GET",url:e}).then(function(t){a.data=t.data,console.log(t.data)},function(t){a.status=t.status,alert(a.status+" <== Error")})},a.listOptions={title:"Video Campaigns",noDataMessage:"You have no campaigns within this time range.",columns:{"Campaign Name":"item.campaign",Name:"item.name",Email:"item.email",Question:"item.question",Duration:"item.duration","Date Sent":"item.created_at","Date Received ":"item.received"}},a.loadTable()}t.$inject=["$http","$log"],angular.module("angularMaterialKitchenSink").controller("Part2Controller",t)}(),function(){"use strict";function t(t){var e=this;e.email="",e.time="1",e.question="",e.name="",e.campaign="",e.send=function(){var a="/api/mail/"+e.email+"/"+e.name+"/"+e.campaign+"/"+e.time+"/"+e.question;t({method:"POST",url:a}).then(function(t){e.response=t.data,alert(angular.toJson(e.response))},function(t){e.status=t.statusText})}}t.$inject=["$http"],angular.module("angularMaterialKitchenSink").controller("Part1Controller",t)}(),function(){"use strict";function t(){var t=this;t.title1="Button",t.title4="Warn",t.isDisabled=!0,t.googleUrl="http://google.com"}angular.module("angularMaterialKitchenSink").controller("ButtonController",t)}(),function(){"use strict";function t(){var t=this;t.title1="Button",t.title4="Warn",t.isDisabled=!0,t.googleUrl="http://google.com"}angular.module("angularMaterialKitchenSink").controller("HomeController",t)}(),function(){"use strict";function t(t,e){function a(a){var n=a?o.states.filter(i(a)):o.states,r=e.defer();return t(function(){r.resolve(n)},1e3*Math.random(),!1),r.promise}function n(){var t="Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,              Wisconsin, Wyoming";return t.split(/, +/g).map(function(t){return{value:t.toLowerCase(),display:t}})}function i(t){var e=angular.lowercase(t);return function(t){return 0===t.value.indexOf(e)}}var o=this;o.states=n(),o.selectedItem=null,o.searchText=null,o.querySearch=a}t.$inject=["$timeout","$q"],angular.module("angularMaterialKitchenSink").controller("AutocompleteController",t)}(),function(){"use strict";function t(t,e,a){var n=this;n.menuItems=[{name:"Send Invite",path:"part1"},{name:"Invites Sent",path:"part2"},{name:"Videos Received",path:"part3"},{name:"Videos Transformed",path:"part5"}],n.title="home",n.go=function(t,e){a.go(t),n.title=e},n.toggleLeft=function(){e("left").toggle()},n.menuIcon="menu",n.menuToggle=function(){e("left").isOpen()?(e("left").close(),n.menuIcon="menu"):(e("left").open(),n.menuIcon="arrow_back")}}t.$inject=["$scope","$mdSidenav","$state"],angular.module("angularMaterialKitchenSink").controller("IndexController",t)}(),angular.module("angularMaterialKitchenSink").run(["$templateCache",function(t){t.put("app/jn_list.html",'<md-card class=jn-list><md-card-content><h3 class=md-title>{{part2.listOptions.title}}</h3><md-list ng-cloak><md-list-item class=list-header layout=row><span ng-repeat="(k,v) in part2.listOptions.columns" ng-style="{width: 100/9 + \'%\'}">{{k}}</span></md-list-item><md-virtual-repeat-container md-auto-shrink=true id=scroll-container ng-show="part2.data && part2.data.length > 0" ng-style="{height: (part2.data.length * 48) + \'px\'}"><md-list-item md-virtual-repeat="item in part2.data" layout=row><span ng-repeat="(k,v) in part2.listOptions.columns" ng-bind={{v}} ng-style="{width: 100/9 + \'%\'}"></span></md-list-item></md-virtual-repeat-container><md-list-item ng-if="part2.data && !part2.data.length" layout=row class=no-data><span>{{part2.listOptions.noDataMessage}}</span></md-list-item></md-list><loading-spinner ng-if=loading></loading-spinner></md-card-content></md-card>'),t.put("app/autocomplete/autocomplete.html",'<div layout=column ng-cloak=""><md-content class=md-padding><form ng-submit=$event.preventDefault() name=searchForm><p>The following example demonstrates autocomplete. Try typing a state.</p><div layout-gt-sm=row><md-input-container flex=""><label>Name</label><input type=text></md-input-container><md-autocomplete flex="" required md-input-name=autocompleteField md-input-minlength=2 md-input-maxlength=18 md-no-cache=autocomplete.noCache md-selected-item=autocomplete.selectedItem md-search-text=autocomplete.searchText md-items="item in autocomplete.querySearch(autocomplete.searchText)" md-item-text=item.display md-require-match="" md-floating-label="Favorite state"><md-item-template><span md-highlight-text=autocomplete.searchText>{{item.display}}</span></md-item-template><div ng-messages=searchForm.autocompleteField.$error ng-if=searchForm.autocompleteField.$touched><div ng-message=required>You <b>must</b> have a favorite state.</div><div ng-message=md-require-match>Please select an existing state.</div><div ng-message=minlength>Your entry is not long enough.</div><div ng-message=maxlength>Your entry is too long.</div></div></md-autocomplete></div></form></md-content></div>'),t.put("app/button/button.html",'<div ng-cloak class=buttondemoBasicUsage><md-content><section layout=row layout-sm=column layout-align="center center" layout-wrap=""><md-button>{{title1}}</md-button><md-button md-no-ink="" class=md-primary>Primary (md-noink)</md-button><md-button ng-disabled=true class=md-primary>Disabled</md-button><md-button class=md-warn>{{title4}}</md-button><div class=label>Flat</div></section><section layout=row layout-sm=column layout-align="center center" layout-wrap=""><md-button class=md-raised>Button</md-button><md-button class="md-raised md-primary">Primary</md-button><md-button ng-disabled=true class="md-raised md-primary">Disabled</md-button><md-button class="md-raised md-warn">Warn</md-button><div class=label>Raised</div></section><section layout=row layout-sm=column layout-align="center center" layout-wrap=""><md-button class=md-fab aria-label="Eat cake"><i class=material-icons>cake</i></md-button><md-button class="md-fab md-primary" aria-label="Use Android"><i class=material-icons>android</i></md-button><md-button class=md-fab ng-disabled=true aria-label=Comment><i class=material-icons>comment</i></md-button><md-button class="md-fab md-primary md-hue-2" aria-label=Profile><i class=material-icons>people</i></md-button><md-button class="md-fab md-mini" aria-label="Eat cake"><i class=material-icons>cake</i></md-button><md-button class="md-fab md-mini md-primary" aria-label="Use Android"><i class=material-icons style=color:greenyellow>android</i></md-button><div class=label>FAB</div></section><section layout=row layout-sm=column layout-align="center center" layout-wrap=""><md-button ng-href={{googleUrl}} target=_blank>Default Link</md-button><md-button class=md-primary ng-href={{googleUrl}} target=_blank>Primary Link</md-button><md-button>Default Button</md-button><div class=label>Link vs. Button</div></section><section layout=row layout-sm=column layout-align="center center" layout-wrap=""><md-button class="md-primary md-hue-1">Primary Hue 1</md-button><md-button class="md-warn md-raised md-hue-2">Warn Hue 2</md-button><md-button class=md-accent>Accent</md-button><md-button class="md-accent md-raised md-hue-1">Accent Hue 1</md-button><div class=label>Themed</div></section><section layout=row layout-sm=column layout-align="center center" layout-wrap=""><md-button class="md-icon-button md-primary" aria-label=Settings><i class=material-icons>menu</i></md-button><md-button class="md-icon-button md-accent" aria-label=Favorite><i class=material-icons>favorite</i></md-button><md-button class=md-icon-button aria-label=More><i class=material-icons>more_vert</i></md-button><md-button href=http://google.com title="Launch Google.com in new window" target=_blank ng-disabled=true aria-label=Google.com class="md-icon-button launch"><i class=material-icons>launch</i></md-button><div class=label>Icon Button</div></section></md-content></div>'),t.put("app/home/home.html","<div class=jumbotron></div><md-content></md-content>"),t.put("app/part1/part1.html","<div layout=column ng-cloak=\"\"><md-content class=md-padding><form ng-submit=$event.preventDefault() name=searchForm><md-content layout-padding><form name=projectForm><md-input-container class=md-block><label><b>Campaign</b></label><input required type=text name=campaign ng-model=part1.campaign minlength=5 maxlength=30><div ng-messages=projectForm.campaign.$error role=alert><div ng-message-exp=\"['required', 'minlength', 'maxlength', 'pattern']\">Your Name must be between 5 and 30 characters.</div></div></md-input-container><md-input-container class=md-block><label><b>Name</b></label><input required type=text name=userName ng-model=part1.name minlength=1 maxlength=30><div ng-messages=projectForm.userNmae.$error role=alert><div ng-message-exp=\"['required', 'minlength', 'maxlength', 'pattern']\">Your Name must be between 11 and 30 characters.</div></div></md-input-container><md-input-container class=md-block><label>Email</label><input required type=email name=userEmail ng-model=part1.email minlength=10 maxlength=100 ng-pattern=/^.+@.+\\..+$/ ><div ng-messages=projectForm.userEmail.$error role=alert><div ng-message-exp=\"['required', 'minlength', 'maxlength', 'pattern']\">Your E-mail must be between 10 and 100 characters long and should be a valid email address.</div></div></md-input-container><md-input-container class=md-block><label>Question</label><input required type=text name=userQuestion ng-model=part1.question minlength=10 maxlength=200><div ng-messages=projectForm.userEmail.$error role=alert><div ng-message-exp=\"['required', 'minlength', 'maxlength', 'pattern']\">Your Question must be between 10 and 200 characters long.</div></div></md-input-container><label><b><h2>Video Duration</h2></b></label><md-radio-group ng-model=part1.time><md-radio-button value=1 class=md-primary>30-sec</md-radio-button><md-radio-button value=2>1 min</md-radio-button><md-radio-button value=3>2 min</md-radio-button></md-radio-group><button ng-click=part1.send()>Send</button></form></md-content></form></md-content></div>"),t.put("app/part2/part2.html",'<md-card class=jn-list><md-card-content><h3 class=md-title>{{part2.listOptions.title}}</h3><md-list ng-cloak><md-list-item class=list-header layout=row><span ng-repeat="(k,v) in part2.listOptions.columns" ng-style="{width: 100/7 + \'%\'}">{{k}}</span></md-list-item><md-virtual-repeat-container md-auto-shrink=true id=scroll-container ng-show="part2.data && part2.data.length > 0" ng-style="{height: (part2.data.length * 48) + \'px\'}"><md-list-item md-virtual-repeat="item in part2.data" layout=row><span ng-repeat="td in item" ng-style="{width: 100/7 + \'%\'}">{{td}}</span></md-list-item></md-virtual-repeat-container><md-list-item ng-if="part2.data && !part2.data.length" layout=row class=no-data><span>{{part2.listOptions.noDataMessage}}</span></md-list-item></md-list><loading-spinner ng-if=loading></loading-spinner></md-card-content></md-card>'),t.put("app/part3/part3.html",'<md-card class=jn-list><h3 class=md-title>{{part3.listOptions.title}}</h3><md-list ng-cloak><md-list-item class=list-header layout=row><span ng-repeat="(k,v) in part3.listOptions.columns" ng-style="{width: 100/5 + \'%\'}">{{k}}</span></md-list-item><md-virtual-repeat-container md-auto-shrink=true id=scroll-container ng-show="part3.data && part3.data.length > 0" ng-style="{height: (part3.data.length * 48) + \'px\'}"><md-list-item md-virtual-repeat="item in part3.data" layout=row><span ng-repeat-start="td in item" ng-if=$first></span> <span ng-repeat-end="td in item" ng-style="{width: 100/6 + \'%\'}" ng-if=!$first>{{td}} </span><!--\n            <md-button class="md-primary md-raised" ng-click="part3.selectVideo(item[0])">View</md-button>\n            --><md-button class="md-primary md-raised" ng-click=part3.showVideo(item[0])>View</md-button></md-list-item></md-virtual-repeat-container><md-list-item ng-if="part3.data && !part3.data.length" layout=row class=no-data><span>{{part3.listOptions.noDataMessage}}</span></md-list-item></md-list><loading-spinner ng-if=loading></loading-spinner></md-card><div class=md-padding layout=row layout-wrap><md-card flex=50><md-card-content><video controls id=video-1><source src="" type=video/webm id=videoSrc></video></md-card-content></md-card><md-card><md-card-content><mat-list><mat-list-item><md-button class="md-primary md-raised" ng-click=part3.transformMP4()>Webm -> mp4</md-button></mat-list-item><mat-list-item><md-button class="md-primary md-raised" ng-click=part3.sendToAI()>Send To AI Interface</md-button></mat-list-item><br><mat-list-item><md-button class="md-primary md-raised" ng-click=part3.getJobs()>Get Jobs</md-button></mat-list-item><mat-list-item><md-button class="md-primary md-raised" ng-click=part3.getJobStatus()>Get Job({{part3.job_id}}) Status</md-button></mat-list-item><mat-list-item><md-button class="md-primary md-raised" ng-click=part3.getJobResults()>Get Job Results</md-button></mat-list-item></mat-list></md-card-content></md-card></div>'),t.put("app/part4/part4.html",'<!--\n<md-content class="md-padding">\n\n  <div>{{part4.source}}</div>\n\n  <video width="640" height="320"  controls="controls" source src="{{part4.source | trustURL}}" >\n\n    Your browser does not support the video tag.\n  </video>\n </md-content>\n--><div layout=column flex><video width=640 height=480 autoplay preload=auto><!--\n    <source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/mp4"/>\n    --><source src=" https://ziller2.dyndns.org:8000/uploads/{{part4.source}}" type=video/webm><!-- <source src=" https://ziller2.dyndns.org:8000/uploads/5895b7e5d9cdc97c5ff8529f.webm" type="video/webm"/> --></video><div><br><br><div id=div1>No Pyramids&nbsp<input type=text size=2 ng-model=part4.eulerParams.noPyramids></div><div id=div2>freq Min&nbsp<input type=text size=3 ng-model=part4.eulerParams.freqMin></div><div id=div3>freq Max&nbsp<input type=text size=3 ng-model=part4.eulerParams.freqMax></div><div id=div4>Amplification&nbsp<input type=text size=2 ng-model=part4.eulerParams.amplification></div><button ng-click=part4.eulerAmpVideo()>Eulerian Amplification</button></div></div>'),t.put("app/part5/part5.html",'<md-card class=jn-list><md-card-content><h3 class=md-title>{{part3.listOptions.title}}</h3><md-list ng-cloak><md-list-item class=list-header layout=row><span ng-repeat="(k,v) in part5.listOptions.columns" ng-style="{width: 100/2 + \'%\'}">{{k}}</span></md-list-item><md-virtual-repeat-container md-auto-shrink=true id=scroll-container ng-show="part5.data && part5.data.length > 0" ng-style="{height: (part5.data.length * 48) + \'px\'}"><md-list-item md-virtual-repeat="item in part5.data" layout=row><span ng-repeat="(k,v) in part5.listOptions.columns" ng-bind={{v}} ng-style="{width: 100/2+ \'%\'}"></span><button ng-click=part5.selectTransformedVideo(item)>View</button></md-list-item></md-virtual-repeat-container><md-list-item ng-if="part5.data && !part5.data.length" layout=row class=no-data><span>{{part5.listOptions.noDataMessage}}</span></md-list-item></md-list><loading-spinner ng-if=loading></loading-spinner></md-card-content></md-card>'),t.put("app/part6/part6.html",'<!--\n<md-content class="md-padding">\n\n  <div>{{part4.source}}</div>\n\n  <video width="640" height="320"  controls="controls" source src="{{part4.source | trustURL}}" >\n\n    Your browser does not support the video tag.\n  </video>\n </md-content>\n--> {{part6.source}}<div layout=column flex><video width=640 height=480 autoplay preload=auto><!--\n    <source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/mp4"/>\n    --><source src=" https://ziller2.dyndns.org:8000/uploads/avi/{{part6.source}}" type=video/mp4><!-- <source src=" https://ziller2.dyndns.org:8000/uploads/avi/out.mp4" type="video/mp4"/> --></video></div>'),t.put("app/tech/tech.html",'<div layout=vertical layout-fill><md-content><section class=jumbotron style=background-color:#4DD0E1><h1>Video Recorder</h1><h2>Demo Programme</h2><p>includes these fine tools</p></section><div class=techs layout-align=center><md-card ng-repeat="awesomeThing in tech.awesomeThings | orderBy:\'rank\'"><md-card-content><img class=pull-right ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><h3 class=md-title>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p></md-card-content><div class=md-action-buttons><md-button ng-href="{{ awesomeThing.url }}">Website</md-button></div></md-card></div></md-content></div>'),t.put("app/components/navbar/navbar.html",'<md-toolbar layout=row layout-align="center center"><md-button href=https://github.com/Swiip/generator-gulp-angular>Gulp Angular</md-button>FRED<section flex layout=row layout-align="left center"><md-button href=# class=md-raised>Home</md-button><md-button href=# class=md-raised>About</md-button><md-button href=# class=md-raised>Contact</md-button></section><md-button class=acme-navbar-text>Application was created {{ vm.relativeDate }}.</md-button></md-toolbar>')}]);
//# sourceMappingURL=../maps/scripts/app-26cb8ffbc8.js.map
