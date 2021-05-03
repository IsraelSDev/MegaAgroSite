    
<!--ISRAEL SOARES - ISSTUDIO.COM.BR / 13:55 / 03-05-2021-->

	<?php

	if(isset($_GET['url'])){
		if(file_exists($_GET['url']).'.html'){
			include($_GET['url'].'.html');
		}else{
			include('404-error-page.html');
		}
	}else{
		include('home.html');
	}
?>


<!--ISRAEL SOARES - ISSTUDIO.COM.BR / 13:55 / 03-05-2021-->