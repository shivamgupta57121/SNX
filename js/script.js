
function dept() {
	document.getElementById("clgdept").classList.remove("clgdeptjs");
	document.getElementById("clgnews").classList.remove("show");
	document.getElementById("clgadm").classList.remove("show");
	document.getElementById("clgbdm").classList.remove("show");
	document.getElementById("clgalm").classList.remove("show");
	document.getElementById("clgcont").classList.remove("show");
}

function news() {
	document.getElementById("clgnews").classList.add("show");
	document.getElementById("clgdept").classList.add("clgdeptjs");
	document.getElementById("clgadm").classList.remove("show");
	document.getElementById("clgbdm").classList.remove("show");
	document.getElementById("clgalm").classList.remove("show");
	document.getElementById("clgcont").classList.remove("show");
}

function adm() {
	document.getElementById("clgadm").classList.add("show");
	document.getElementById("clgdept").classList.add("clgdeptjs");
	document.getElementById("clgnews").classList.remove("show");
	document.getElementById("clgbdm").classList.remove("show");
	document.getElementById("clgalm").classList.remove("show");
	document.getElementById("clgcont").classList.remove("show");
}

function bdm() {
	document.getElementById("clgbdm").classList.add("show");
	document.getElementById("clgdept").classList.add("clgdeptjs");
	document.getElementById("clgnews").classList.remove("show");
	document.getElementById("clgadm").classList.remove("show");
	document.getElementById("clgalm").classList.remove("show");
	document.getElementById("clgcont").classList.remove("show");
}

function alm() {
	document.getElementById("clgalm").classList.add("show");
	document.getElementById("clgdept").classList.add("clgdeptjs");
	document.getElementById("clgnews").classList.remove("show");
	document.getElementById("clgadm").classList.remove("show");
	document.getElementById("clgbdm").classList.remove("show");
	document.getElementById("clgcont").classList.remove("show");
}

function cont() {
	document.getElementById("clgcont").classList.add("show");
	document.getElementById("clgdept").classList.add("clgdeptjs");
	document.getElementById("clgnews").classList.remove("show");
	document.getElementById("clgadm").classList.remove("show");
	document.getElementById("clgbdm").classList.remove("show");
	document.getElementById("clgalm").classList.remove("show");
}



function react(){
	document.getElementById("react").classList.toggle("hide");
}


function react1(){
	document.getElementById("react1").classList.toggle("hide");
}