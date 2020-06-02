//Emulating the Medium editor
tinymce.init({
	selector: "#content",
	plugins: "fullpage quickbars image media table hr paste print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons",
	skin: "snow",
	icons: "thin",
	menubar: false,
	toolbar: false,
	height : 1000,
	autosave_ask_before_unload: true,
	autosave_interval: "30s",
	autosave_prefix: "{path}{query}-{id}-",
	autosave_restore_when_empty: false,
	autosave_retention: "2m",
	content_style: "@import url('https://fonts.googleapis.com/css2?family=Tinos&display=swap'); body { font-family: 'Tinos', serif; font-size: 16pt; color: #292929; }",
	placeholder: "Tell your story...",
	quickbars_selection_toolbar: "bold italic link | h1 h2 | blockquote",
	quickbars_insert_toolbar: "image media table hr"
  });


//FULL setup v5

// tinymce.init({
// 	selector: '#content',
// 	plugins: 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
// imagetools_cors_hosts: ['picsum.photos'],
// menubar: 'file edit view insert format tools table help',
// toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
// toolbar_sticky: true,
// autosave_ask_before_unload: true,
// autosave_interval: "30s",
// autosave_prefix: "{path}{query}-{id}-",
// autosave_restore_when_empty: false,
// autosave_retention: "2m",
// image_advtab: true,
// content_css: '//www.tiny.cloud/css/codepen.min.css',
// link_list: [
//   { title: 'My page 1', value: 'http://www.tinymce.com' },
//   { title: 'My page 2', value: 'http://www.moxiecode.com' }
// ],
// image_list: [
//   { title: 'My page 1', value: 'http://www.tinymce.com' },
//   { title: 'My page 2', value: 'http://www.moxiecode.com' }
// ],
// image_class_list: [
//   { title: 'None', value: '' },
//   { title: 'Some class', value: 'class-name' }
// ],
// importcss_append: true,
// height: 400,
// file_picker_callback: function (callback, value, meta) {
//   /* Provide file and text for the link dialog */
//   if (meta.filetype === 'file') {
// 	callback('https://www.google.com/logos/google.jpg', { text: 'My text' });
//   }

//   /* Provide image and alt text for the image dialog */
//   if (meta.filetype === 'image') {
// 	callback('https://www.google.com/logos/google.jpg', { alt: 'My alt text' });
//   }

//   /* Provide alternative source and posted for the media dialog */
//   if (meta.filetype === 'media') {
// 	callback('movie.mp4', { source2: 'alt.ogg', poster: 'https://www.google.com/logos/google.jpg' });
//   }
// },
// templates: [
// 	  { title: 'New Table', description: 'creates a new table', content: '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>' },
//   { title: 'Starting my story', description: 'A cure for writers block', content: 'Once upon a time...' },
//   { title: 'New list with dates', description: 'New List with dates', content: '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>' }
// ],
// template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
// template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
// height: 600,
// image_caption: true,
// quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
// noneditable_noneditable_class: "mceNonEditable",
// toolbar_mode: 'sliding',
// contextmenu: "link image imagetools table",

//   });













//FULL setup - v4

// tinymce.init({
// 	/* replace textarea having class .tinymce with tinymce editor */
// 	selector: "textarea.tinymce",
// // 	setup : function(ed) {
// // 		ed.on('change', function(e) {
// // 		   // This will print out all your content in the tinyMce box
// // 		   console.log('the content '+ed.getContent());
// // 		   // Your text from the tinyMce box will now be passed to your  text area ... 
// // 		   $(".tinymce").text(ed.getContent()); 
// // 		});
// //   }
	
// 	/* theme of the editor */
// 	theme: "modern",
// 	skin: "lightgray",
	
	
// 	/* width and height of the editor */
// 	width: "100%",
// 	height: 300,
	
// 	/* display statusbar */
// 	statusbar: true,
	
// 	/* plugin */
// 	plugins: [
// 		"advlist autolink link image lists charmap print preview hr anchor pagebreak",
// 		"searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
// 		"save table contextmenu directionality emoticons template paste textcolor"
// 	],

// 	/* toolbar */
// 	toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons | fontsizeselect",
	
// 	fontsize_formats: "8pt 10pt 12pt 14pt 18pt 24pt 36pt 48pt",

// 	/* style */
// 	style_formats: [
// 		{title: "Headers", items: [
// 			{title: "Header 1", format: "h1"},
// 			{title: "Header 2", format: "h2"},
// 			{title: "Header 3", format: "h3"},
// 			{title: "Header 4", format: "h4"},
// 			{title: "Header 5", format: "h5"},
// 			{title: "Header 6", format: "h6"}
// 		]},
// 		{title: "Inline", items: [
// 			{title: "Bold", icon: "bold", format: "bold"},
// 			{title: "Italic", icon: "italic", format: "italic"},
// 			{title: "Underline", icon: "underline", format: "underline"},
// 			{title: "Strikethrough", icon: "strikethrough", format: "strikethrough"},
// 			{title: "Superscript", icon: "superscript", format: "superscript"},
// 			{title: "Subscript", icon: "subscript", format: "subscript"},
// 			{title: "Code", icon: "code", format: "code"}
// 		]},
// 		{title: "Blocks", items: [
// 			{title: "Paragraph", format: "p"},
// 			{title: "Blockquote", format: "blockquote"},
// 			{title: "Div", format: "div"},
// 			{title: "Pre", format: "pre"}
// 		]},
// 		{title: "Alignment", items: [
// 			{title: "Left", icon: "alignleft", format: "alignleft"},
// 			{title: "Center", icon: "aligncenter", format: "aligncenter"},
// 			{title: "Right", icon: "alignright", format: "alignright"},
// 			{title: "Justify", icon: "alignjustify", format: "alignjustify"}
// 		]}
// 	]
// });
