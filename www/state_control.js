
<script>
function PJAX{
	this.state = "main";
	this.prev_state = "main";
}
PJAX.protoype.changestate(state){
	switch(state){
		case "main":
			$("body").load("main.html #body");
			this.prev_state = state;
			this.state = state;
			break;
		case "settings":
			$("body").load("settings.html #body");
			this.prev_state = state;
			this.state = state;
			break;
		case "list":
			$("body").load("list.html #body");
			this.prev_state = state;
			this.state = state;
			break;
		case "info":
			$("body").load("info.html #body");
			this.prev_state = state;
			this.state = state;
			break;
		case "location":
			$("body").load("location.html #body");
			this.prev_state = state;
			this.state = state; 
			break;
		default:
			break;
	}
</script>
