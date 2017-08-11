var ff_templates = {
    streamRow:      '<td class="controls"><div class="loader-wrapper"><div class="throbber-loader"></div></div><i class="flaticon-pen"></i> <i class="flaticon-copy"></i> <i class="flaticon-trash"></i></td> <td class="td-name"><%= name %></td> <td class="td-type"><%= layout %></span></td> <td class="td-feed"><%= feeds %></td><td><span class="cache-status-<%= status %>"></span></td><td><span class="shortcode">[ff id="<%= id %>"]</span><span class="shortcode-copy">Copy</span></td>',
    streamRowEmpty: '<tr class="empty-row"><td class="empty-cell" colspan="6">Please create at least one stream</td></tr>',
    listRowEmpty: '<tr><td  class="empty-cell" colspan="4">Add at least one feed</td></tr>',

    view:           '<input type="hidden" name="stream-<%= id %>-id" class="stream-id-value" value="<%= id %>"/>\
                <div class="section clearfix" id="stream-name-<%= id %>">\
                    <h1 class="float-left"><%= header %><span class="admin-button grey-button button-go-back">Go back to list</span></h1>\
                    <p class="float-left input-not-obvious"><input type="text" name="stream-<%= id %>-name" placeholder="Type name and hit Enter..."/>\
                    <ul class="view-tabs float-left"><li class="tab-cursor"></li><li>feeds</li><li>general</li><%= TVtab %><li>container</li><li>stylings</li><li>css</li><li>shortcode</li></ul>\
                </div>\
                <div class="section" id="stream-feeds-<%= id %>" data-tab="feeds">\
                    <input type="hidden" name="stream-<%= id %>-feeds"/>\
                    <h1 class="desc-following">Connected feeds</h1>\
                    <p class="desc">Here you can connect feeds created on <a class="ff-pseudo-link" href="#sources-tab">Feeds tab</a>. To detach feed click feed label.</p>\
        <div class="stream-feeds">\
            <div class="stream-feeds__list"></div>\
            <div class="stream-feeds__block"><span class="stream-feeds__add">+ Connect feed to stream</span></div>\
            <div class="stream-feeds__select"><select></select><span class="stream-feeds__btn stream-feeds__ok"><i class="flaticon-plus"></i></span><span class="stream-feeds__btn stream-feeds__close"><i class="flaticon-cross"></i></span></div>\
        </div>\
    </div>\
    <div class="section"  data-tab="general" id="stream-settings-<%= id %>">\
        <h1>Stream general settings</h1>\
        <dl class="section-settings section-compact">\
                        <dt class="hidden">Load last\
                            <p class="desc">Number of items that is pulled and cached from each connected feed. Be aware that some APIs can ignore this setting.</p>\
                        </dt>\
                        <dd class="hidden"><input type="text"  name="stream-<%= id %>-posts" value="40" class="short clearcache"/> posts <span class="space"></span><input type="text" class="short clearcache" name="stream-<%= id %>-days"/> days</dd>\
                        <dt>Number of visible items\
                            <p class="desc">Overall number of items from all connected feeds to show in stream.</p>\
                        </dt>\
                        <dd><input type="text"  name="stream-<%= id %>-page-posts" value="20" class="short clearcache"/> posts</dd>\
                        <dt class="multiline" style="display:none">Cache\
                            <p class="desc">Caching stream data to reduce loading time</p></dt>\
                        <dd style="display:none">\
                            <label for="stream-<%= id %>-cache"><input id="stream-<%= id %>-cache" class="switcher clearcache" type="checkbox" name="stream-<%= id %>-cache" checked value="yep"/><div><div></div></div></label>\
                        </dd>\
                        <dt class="multiline hidden">Cache lifetime\
                            <p class="desc">Make it longer if feeds are rarely updated or shorter if you need frequent updates.</p></dt>\
                        <dd class="hidden">\
                            <label for="stream-<%= id %>-cache-lifetime"><input id="stream-<%= id %>-cache-lifetime" class="short clearcache" type="text" name="stream-<%= id %>-cache-lifetime" value="10"/> minutes</label>\
                        </dd>\
                        <dt class="multiline">Private stream<p class="desc">Show only for logged in users.</p></dt>\
                        <dd>\
                            <label for="stream-<%= id %>-private"><input id="stream-<%= id %>-private" class="switcher" type="checkbox" name="stream-<%= id %>-private" value="yep"/><div><div></div></div></label>\
                        </dd>\
                        <dt class="multiline">Hide stream on a desktop<p class="desc">If you want to create desktop specific stream only.</p></dt>\
                        <dd>\
                            <label for="stream-<%= id %>-hide-on-desktop"><input id="stream-<%= id %>-hide-on-desktop" class="switcher" type="checkbox" name="stream-<%= id %>-hide-on-desktop" value="yep"/><div><div></div></div></label>\
                        </dd>\
                        <dt class="multiline">Hide stream on a mobile device<p class="desc">If you want to show stream content only on mobiles.</p></dt>\
                        <dd>\
                            <label for="stream-<%= id %>-hide-on-mobile"><input id="stream-<%= id %>-hide-on-mobile" class="switcher" type="checkbox" name="stream-<%= id %>-hide-on-mobile" value="yep"/><div><div></div></div></label>\
                        </dd>\
                     <dt class="multiline">Titles link<p class="desc">If yes and lightbox is enabled then titles will link to original posts.</p></dt>\
                        <dd>\
                            <label for="stream-<%= id %>-titles"><input id="stream-<%= id %>-titles" class="switcher" type="checkbox" name="stream-<%= id %>-titles" value="yep"/><div><div></div></div></label>\
                        </dd>\
                        <dt class="multiline">Hide meta info<p class="desc">Hide social network icon, name, timestamp in each post.</p></dt>\
                        <dd>\
                            <label for="stream-<%= id %>-hidemeta"><input id="stream-<%= id %>-hidemeta" class="switcher" type="checkbox" name="stream-<%= id %>-hidemeta" value="yep"/><div><div></div></div></label>\
                        </dd>\                        \
                        <dt class="multiline">Hide text<p class="desc">Hide text content of each post.</p></dt>\
                        <dd>\
                            <label for="stream-<%= id %>-hidetext"><input id="stream-<%= id %>-hidetext" class="switcher" type="checkbox" name="stream-<%= id %>-hidetext" value="yep"/><div><div></div></div></label>\
                        </dd>\
                    </dl>\
                    <span id="stream-settings-sbmt-<%= id %>" class="admin-button green-button submit-button">Save Changes</span>\
                </div>\
                                  <%= TV %>\
<div class="section"  data-tab="container" id="cont-settings-<%= id %>">\
<h1>Stream container settings</h1>\
<dl class="section-settings section-compact">\
    <dt class="multiline">Stream heading\
        <p class="desc">Leave empty to not show.</p></dt>\
    <dd>\
        <input id="stream-<%= id %>-heading" type="text" name="stream-<%= id %>-heading" placeholder="Enter heading"/>\
    </dd>\
    <dt class="multiline">Heading color\
        <p class="desc">Click on field to open colorpicker.</p>\
    </dt>\
    <dd>\
        <input id="heading-color-<%= id %>" data-color-format="rgba" name="stream-<%= id %>-headingcolor" type="text" value="rgb(154, 78, 141)" tabindex="-1">\
        </dd>\
        <dt>Stream subheading</dt>\
        <dd>\
            <input id="stream-<%= id %>-subheading" type="text" name="stream-<%= id %>-subheading" placeholder="Enter subheading"/>\
        </dd>\
        <dt class="multiline">Subheading color\
            <p class="desc">You can also paste color in input.</p>\
        </dt>\
        <dd>\
            <input id="subheading-color-<%= id %>" data-color-format="rgba" name="stream-<%= id %>-subheadingcolor" type="text" value="rgb(114, 112, 114)" tabindex="-1">\
            </dd>\
            <dt><span class="valign">Headings alignment</span></dt>\
            <dd class="">\
                <div class="select-wrapper">\
                    <select name="stream-<%= id %>-hhalign" id="hhalign-<%= id %>">\
                        <option value="center" selected>Centered</option>\
                        <option value="left">Left</option>\
                        <option value="right">Right</option>\
                    </select>\
                </div>\
            </dd>\
            <dt class="multiline">Container background color\
                <p class="desc">You can see it in live preview below.</p>\
            </dt>\
            <dd>\
                <input data-prop="backgroundColor" id="bg-color-<%= id %>" data-color-format="rgba" name="stream-<%= id %>-bgcolor" type="text" value="rgb(229, 229, 229)" tabindex="-1">\
                </dd>\
                    <dt class="multiline">Slider on mobiles <p class="desc">On mobiles grid will turn into slider with 3 items per slide.</p></dt>\
                    <dd>\
                        <label for="stream-<%= id %>-mobileslider"><input id="stream-<%= id %>-mobileslider" class="switcher" type="checkbox" name="stream-<%= id %>-mobileslider" value="yep"/><div><div></div></div></label>\
                    </dd>\
                    <dt class="multiline">Animate grid items <p class="desc">When they appear in viewport (otherwise all items are visible immediately).</p></dt>\
                    <dd>\
                        <label for="stream-<%= id %>-viewportin"><input id="stream-<%= id %>-viewportin" class="switcher" type="checkbox" name="stream-<%= id %>-viewportin" checked value="yep"/><div><div></div></div></label>\
                    </dd>\
                </dl>\
                <span id="stream-cont-sbmt-<%= id %>" class="admin-button green-button submit-button">Save Changes</span>\
            </div>\
            <div class="section"  data-tab="stylings" id="stream-stylings-<%= id %>">\
                    <input name="stream-<%= id %>-layout" class="clearcache" id="stream-layout-<%= id %>" type="hidden" value="grid"/>\
                <div class="design-step-2 layout-grid">\
                    <input name="stream-<%= id %>-theme"    id="theme-classic-<%= id %>" type="hidden" value="classic" class="clearcache"/>\
                    <input name="stream-<%= id %>-gc-style" id="gc-style-<%= id %>" type="hidden" value="style-4"/>\
                    <h1>Grid stylings</h1>\
                    <dl class="section-settings section-compact">\
                        <dt><span class="valign">Card dimensions</span></dt>\
                        <dd>Width: <input type="text" data-prop="width" id="width-<%= id %>" name="stream-<%= id %>-width" value="260" class="short clearcache"/> px <span class="space"></span> Margin: <input type="text" id="margin-<%= id %>" value="20" class="short" name="stream-<%= id %>-margin"/> px</dd>\
                    </dl>\
<dl class="classic-style style-choice section-settings section-compact" style="display:block">\
    <dt class="multiline">Card background color\
        <p class="desc">Click on field to open colorpicker.</p>\
    </dt>\
    <dd>\
        <input data-prop="backgroundColor" id="card-color-<%= id %>" data-color-format="rgba" name="stream-<%= id %>-cardcolor" type="text" value="rgb(255,255,255)" tabindex="-1">\
        </dd>\
        <dt class="multiline">Color for heading & name\
            <p class="desc">Also for social buttons hover.</p>\
        </dt>\
        <dd>\
            <input data-prop="color" id="name-color-<%= id %>" data-color-format="rgba" name="stream-<%= id %>-namecolor" type="text" value="rgb(154, 78, 141)" tabindex="-1">\
            </dd>\
            <dt>Regular text color\
            </dt>\
            <dd>\
                <input data-prop="color" id="text-color-<%= id %>" data-color-format="rgba" name="stream-<%= id %>-textcolor" type="text" value="rgb(85,85,85)" tabindex="-1">\
                </dd>\
                <dt>Links color</dt>\
                <dd>\
                    <input data-prop="color" id="links-color-<%= id %>" data-color-format="rgba" name="stream-<%= id %>-linkscolor" type="text" value="rgb(94, 159, 202)" tabindex="-1">\
                    </dd>\
                    <dt class="multiline">Other text color\
                        <p class="desc">Nicknames, timestamps.</p></dt>\
                    <dd>\
                        <input data-prop="color" id="other-color-<%= id %>" data-color-format="rgba" name="stream-<%= id %>-restcolor" type="text" value="rgb(132, 118, 129)" tabindex="-1">\
                        </dd>\
                        <dt>Card shadow</dt>\
                        <dd>\
                            <input data-prop="box-shadow" id="shadow-color-<%= id %>" data-color-format="rgba" name="stream-<%= id %>-shadow" type="text" value="rgba(0,0,0,.05)" tabindex="-1">\
                            </dd>\
                            <dt>Separator line color</dt>\
                            <dd>\
                                <input data-prop="border-color" id="bcolor-<%= id %>" data-color-format="rgba" name="stream-<%= id %>-bcolor" type="text" value="rgba(240, 237, 231, 0.4)" tabindex="-1">\
                                </dd>\
                                <dt><span class="valign">Text alignment</span></dt>\
                                <dd class="">\
                                    <div class="select-wrapper">\
                                        <select name="stream-<%= id %>-talign" id="talign-<%= id %>">\
                                            <option value="left" selected>Left</option>\
                                            <option value="center">Centered</option>\
                                            <option value="right">Right</option>\
                                        </select>\
                                    </div>\
                                </dd>\
                                <dt class="hide">Preview</dt>\
                                <dd class="preview">\
                                    <h1>Live preview</h1>\
                                    <div data-preview="bg-color" class="ff-stream-wrapper ff-layout-grid ff-theme-classic ff-style-1 shuffle">\
                                        <div data-preview="card-color,shadow-color,width" class="ff-item ff-twitter shuffle-item filtered" style="visibility: visible; opacity:1;">\
                                            <h4 data-preview="name-color">Header example</h4>\
                                            <p data-preview="text-color">This is regular text paragraph, can be tweet, facebook post etc. This is example of <a href="#" data-preview="links-color">link in text</a>.</p>\
                                            <span class="ff-img-holder" style="max-height: 171px"><img src="<%= plugin_url %>/assets/67.png" style="width:100%;"></span>\
                                                <div class="ff-item-meta">\
                                                    <span class="separator" data-preview="bcolor"></span>\
                                                    <span class="ff-userpic" style="background:url(<%= plugin_url %>/assets/chevy.jpeg)"><i class="ff-icon" data-overrideProp="border-color" data-preview="card-color"><i class="ff-icon-inner"></i></i></span><a data-preview="name-color" target="_blank" rel="nofollow" href="#" class="ff-name">Looks Awesome</a><a data-preview="other-color" target="_blank" rel="nofollow" href="#" class="ff-nickname">@looks_awesome</a><a data-preview="other-color" target="_blank" rel="nofollow" href="#" class="ff-timestamp">21m ago </a>\
                                                </div>\
                                            </div>\
                                        </div>\
                                    </dd>\
                                </dl>\
                                <dl class="flat-style style-choice section-settings section-compact" style="display:none">\
                                    <dt><span class="valign">Modern card style</span></dt>\
                                    <dd class="flat-style style-choice">\
                                        <div class="select-wrapper">\
                                            <select name="stream-<%= id %>-gf-style" id="gf-style-<%= id %>">\
                                                <option value="style-3" selected>Cornered social icon</option>\
                                                <option value="style-1">Rounded userpic</option>\
                                                <option value="style-2">Square userpic</option>\
                                            </select>\
                                        </div>\
                                    </dd>\
                                    <dt class="multiline">Card background color\
                                        <p class="desc">Click on field to open colorpicker.</p>\
                                    </dt>\
                                    <dd>\
                                        <input data-prop="backgroundColor" id="fcolor-<%= id %>" data-color-format="rgba" name="stream-<%= id %>-fcardcolor" type="text" value="rgb(64,68,71)" tabindex="-1">\
                                        </dd>\
                                        <dt class="multiline">Secondary background color\
                                            <p class="desc">Depends on card content.</p>\
                                        </dt>\
                                        <dd>\
                                            <input data-prop="backgroundColor" id="fscolor-<%= id %>" data-color-format="rgba" name="stream-<%= id %>-fscardcolor" type="text" value="rgb(44,45,46)" tabindex="-1">\
                                            </dd>\
                                            <dt>Heading and regular text color\
                                            </dt>\
<dd>\
<input data-prop="color" id="ftextcolor-<%= id %>" data-color-format="rgba" name="stream-<%= id %>-ftextcolor" type="text" value="rgb(255,255,255)" tabindex="-1">\
</dd>\
<dt class="multiline">Card color for links & name\
<p class="desc">Also for social button hover.</p>\
</dt>\
<dd>\
<input data-prop="color" id="fnamecolor-<%= id %>" data-color-format="rgba" name="stream-<%= id %>-fnamecolor" type="text" value="rgb(94,191,255);" tabindex="-1">\
</dd>\
<dt class="multiline">Color for other texts\
<p class="desc">Nickname and timestamp.</p>\
</dt>\
<dd>\
<input data-prop="color" id="frest-<%= id %>" data-color-format="rgba" name="stream-<%= id %>-frestcolor" type="text" value="rgb(175,195,208);" tabindex="-1">\
</dd>\
<dt>Separator line color</dt>\
<dd>\
<input data-prop="border-color" id="fbcolor-<%= id %>" data-color-format="rgba" name="stream-<%= id %>-fbcolor" type="text" value="rgba(255,255,255,0.4)" tabindex="-1">\
</dd>\
<dt class="multiline">Card border\
<p class="desc">If photo is merging to background.</p></dt>\
<dd>\
<label for="stream-<%= id %>-mborder-yep"><input id="stream-<%= id %>-mborder-yep" class="switcher" type="checkbox" name="stream-<%= id %>-mborder" value="yep"/><div><div></div></div></label>\
</dd>\
<dt><span class="valign">Text alignment</span></dt>\
<dd class="">\
<div class="select-wrapper">\
<select name="stream-<%= id %>-ftalign" id="ftalign-<%= id %>">\
    <option value="center" selected>Centered</option>\
    <option value="left" >Left</option>\
    <option value="right">Right</option>\
</select>\
</div>\
</dd>\
<dt class="hide">Preview</dt>\
<dd class="preview">\
<h1>Live preview</h1>\
<div data-preview="bg-color" class="ff-stream-wrapper ff-layout-grid ff-theme-flat ff-style-1 shuffle">\
<div data-preview="fcolor, width" class="ff-item ff-twitter shuffle-item filtered" style="visibility: visible; opacity:1;">\
    <div class="ff-item-cont">\
        <span class="overlay" data-preview="fscolor"></span>\
        <span class="ff-img-holder" style="max-height:162px"><img src="<%= plugin_url %>/assets/7.jpg" style="width:100%;"></span>\
            <p data-preview="ftextcolor, fbcolor">This is regular text paragraph, can be tweet, facebook post etc. This is example of <a href="#" data-preview="fnamecolor">link in text</a>. Good day!</p>\
            <div class="ff-item-meta">\
                <span class="ff-userpic" style="background:url(<%= plugin_url %>/assets/Steve-Zissou.png)"><i class="ff-icon"><i class="ff-icon-inner"></i></i></span><a data-preview="fnamecolor" target="_blank" rel="nofollow" href="#" class="ff-name">Looks Awesome</a><a data-preview="frest" target="_blank" rel="nofollow" href="#" class="ff-nickname">@looks_awesome</a><a data-preview="frest" target="_blank" rel="nofollow" href="#" class="ff-timestamp">21m ago </a>\
            </div>\
        </div>\
    </div>\
</div>\
</dd>\
</dl>\
<span id="stream-stylings-sbmt-<%= id %>" class="admin-button green-button submit-button">Save Changes</span>\
</div>\
            </div>\
            <div class="section" data-tab="css" id="css-<%= id %>">\
                <h1 class="desc-following">Stream custom CSS</h1>\
                <p class="desc" style="margin-bottom:10px">\
                Prefix your selectors with <strong>#ff-stream-<%= id %></strong> to target this specific stream.\
                </p>\
                <textarea  name="stream-<%= id %>-css" cols="100" rows="10" id="stream-<%= id %>-css"/> </textarea>\
            <p style="margin-top:10px"><span id="stream-css-sbmt-<%= id %>" class="admin-button green-button submit-button">Save Changes</span><p>\
            </div>\
            <div class="section shortcode-section" data-tab="shortcode" id="shortcode-<%= id %>">\
                <h1 class="desc-following">Stream shortcode</h1>\
                <p class="desc" style="margin-bottom:10px">\
                Place this shortcode anywhere on your site.\
                </p>\
                <p class="shortcode"><span>[ff id=\"<%= id %>\"]</span></p>\
            </div>\
            <div class="section">\
                    <h1 class="desc-following"><span>Upgrade to PRO</span> <a target="_blank" href="http://goo.gl/g7XQzu" class="admin-button green-button button-upgrade">Upgrade</a></h1>\
    <p class="desc">Upgrade to remove this ad and use the benefits of Flow-Flow <strong>premium features</strong>.</p>\
<a href="http://goo.gl/g7XQzu" target="_blank" class="features"></a>\
    </table>\
    </div>\
            <div class="section footer">\
<div class="width-wrapper"><div class="ff-table"><div class="ff-cell">\
    Flow-Flow Lite<br>\
    Version: <%= version %><br>\
    Made by <a href="http://looks-awesome.com/">Looks Awesome</a>\
</div>\
<div class="ff-cell">\
    <h1>HOT TOPICS</h1>\
    <a target="_blank" href="http://docs.social-streams.com/article/42-first-steps-flow-wp">First Steps With Plugin</a><br>\
    <a target="_blank" href="http://docs.social-streams.com/article/46-authenticate-with-facebook">Connect Facebook</a><br>\
    <a target="_blank" href="http://docs.social-streams.com/article/56-issues-using-big-number-of-feeds">Issues With Streams</a><br>\
    <a target="_blank" href="http://docs.social-streams.com/collection/104-faq">Frequently Asked Questions</a>\
</div>\
<div class="ff-cell">\
    <h1>USEFUL LINKS</h1>\
<a href="http://docs.social-streams.com/">Docs & FAQ</a><br>\
<a href="http://looks-awesome.com/">Looks Awesome Site</a><br>\
<a href="https://twitter.com/looks_awesooome">LA Twitter</a><br>\
    <a href="https://www.facebook.com/looksawesooome">LA Facebook</a>\
    </div>\
    </div>\
    </div>\
    </div>',
    twitterView:    '\
<div class="feed-view" data-feed-type="twitter" data-uid="<%= uid %>">\
<h1>Content settings for Twitter feed</h1>\
<dl class="section-settings">\
<dt>Twitter account</dt>\
<dd><input type="text" name="<%= uid %>-content" placeholder="What content to stream"/>\
<p class="desc">Enter nickname (without @) of any public Twitter</p>\
</dd>\
<dt>Include retweets (if present)</dt>\
<dd>\
<label for="<%= uid %>-retweets"><input id="<%= uid %>-retweets" class="switcher" type="checkbox" name="<%= uid %>-retweets" value="yep"/><div><div></div></div></label>\
</dd>\
<dt>Include replies (if present)</dt>\
<dd>\
<label for="<%= uid %>-replies"><input id="<%= uid %>-replies" class="switcher" type="checkbox" name="<%= uid %>-replies" value="yep"/><div><div></div></div></label>\
</dd>\
<dt>Feed updates frequency</dt>\
<dd>\
<div class="select-wrapper"> <select name="<%= uid %>-cache_lifetime" id="<%= uid %>-cache_lifetime"><option value="5">Every 5 min</option> <option value="30" selected>Every 30 min</option> <option value="60">Every hour</option> <option value="360">Every 6 hours</option> <option value="1440">Once a day</option> <option value="10080">Once a week</option></select> </div></dd>\
<dt>Posts to load during update</dt>\
<dd>\
<div class="select-wrapper"> <select name="<%= uid %>-posts" id="<%= uid %>-post"><option value="1">1 post</option><option value="5">5 posts</option><option selected value="10">10 posts</option><option value="20">20 posts</option></select></div>\
</dd>\
</dl>\
<input type="hidden" id="<%= uid %>-enabled" value="yep" checked type="checkbox" name="<%= uid %>-enabled">\
</div>\
',
    facebookView:   '\
<div class="feed-view"  data-feed-type="facebook" data-uid="<%= uid %>">\
<h1>Content settings for Facebook feed</h1>\
<dl class="section-settings">\
<dt>\
Public Page\
</dt>\
<dd><input type="text" name="<%= uid %>-content" placeholder="What content to stream"/>\
<p class="desc">Enter nickname of any public page or ID (use <a target="_blank" href="http://lookup-id.com/">this tool</a>)</p>\
</dd>\
<dt>Feed updates frequency</dt>\
<dd>\
<div class="select-wrapper"> <select name="<%= uid %>-cache_lifetime" id="<%= uid %>-cache_lifetime"><option value="5">Every 5 min</option> <option value="30" selected>Every 30 min</option> <option value="60">Every hour</option> <option value="360">Every 6 hours</option> <option value="1440">Once a day</option> <option value="10080">Once a week</option></select> </div></dd>\
<dt>Posts to load during update</dt>\
<dd>\
<div class="select-wrapper"> <select name="<%= uid %>-posts" id="<%= uid %>-post"><option value="1">1 post</option><option value="5">5 posts</option><option selected value="10">10 posts</option><option value="20">20 posts</option></select></div>\
</dd>\
</dl>\
<input type="hidden" id="<%= uid %>-enabled" value="yep" checked type="checkbox" name="<%= uid %>-enabled">\
                    </div>\
',
    pinterestView:  '\
  <div class="feed-view" data-feed-type="pinterest" data-uid="<%= uid %>">\
      <h1>Content settings for Pinterest feed</h1>\
      <dl class="section-settings">\
          <dt class="">Pinterest account</dt>\
          <dd class=""><input type="text" name="<%= uid %>-content" placeholder="What content to stream"/>\
              <p class="desc">e.g. <strong>elainen</strong> (for user feed) or <strong>elainen/cute-animals</strong> (for user board).\
              </p></dd>\
              <dt>Feed updates frequency</dt>\
<dd>\
<div class="select-wrapper"> <select name="<%= uid %>-cache_lifetime" id="<%= uid %>-cache_lifetime"><option value="5">Every 5 min</option> <option value="30" selected>Every 30 min</option> <option value="60">Every hour</option> <option value="360">Every 6 hours</option> <option value="1440">Once a day</option> <option value="10080">Once a week</option></select> </div></dd>\
<dt>Posts to load during update</dt>\
<dd>\
<div class="select-wrapper"> <select name="<%= uid %>-posts" id="<%= uid %>-post"><option value="1">1 post</option><option value="5">5 posts</option><option selected value="10">10 posts</option><option value="20">20 posts</option></select></div>\
</dd>\
      </dl>\
      <input type="hidden" id="<%= uid %>-enabled" value="yep" checked type="checkbox" name="<%= uid %>-enabled">\
  </div>\
                      ',
    instagramView:  '\
  <div class="feed-view" data-feed-type="instagram" data-uid="<%= uid %>">\
      <h1>Content settings for Instagram feed</h1>\
      <dl class="section-settings">\
                    <dt>Instagram account</dt>\
          <dd>\
              <input type="text" name="<%= uid %>-content" placeholder="What content to stream"/>\
              <p class="desc">\
                    Enter nickname of any public Instagram account (proper token should be obtained for this)\
                    </p>\
                      </dd>\
                      <dt>Feed updates frequency</dt>\
<dd>\
<div class="select-wrapper"> <select name="<%= uid %>-cache_lifetime" id="<%= uid %>-cache_lifetime"><option value="5">Every 5 min</option> <option value="30" selected>Every 30 min</option> <option value="60">Every hour</option> <option value="360">Every 6 hours</option> <option value="1440">Once a day</option> <option value="10080">Once a week</option></select> </div></dd>\
<dt>Posts to load during update</dt>\
<dd>\
<div class="select-wrapper"> <select name="<%= uid %>-posts" id="<%= uid %>-post"><option value="1">1 post</option><option value="5">5 posts</option><option selected value="10">10 posts</option><option value="20">20 posts</option></select></div>\
</dd>\
  </dl>\
  <input type="hidden" id="<%= uid %>-enabled" value="yep" checked type="checkbox" name="<%= uid %>-enabled">\
</div>\
 ',

filterView:     '\
         <div class="feed-view" data-filter-uid="<%= uid %>">\
     <h1>Moderation settings</h1>\
     <dl class="section-settings">\
 <dt class="">Content to exclude</dt>\
 <dd class=""><input type="text" name="<%= uid %>-filter-by-words" placeholder="What content to exclude"/>\
     <p class="desc">\
     1. To exclude posts by word in text enter any word<br>\
     2. To exclude by URL enter any substring with hash like this <strong>#badpost</strong> or <strong>#1234512345</strong><br>\
         3. To exclude by nickname enter word like this <strong>@nickname</strong><br>\
             4. You can enter multiple exclusion rules separated by comma without spaces eg <strong>anyword,@nickname,#URLpart</strong>\
             </p>\
         </dd>\
     </dl>\
     </div>'
}

ff_templates.stream = ff_templates.view;
