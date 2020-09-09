const msg_list = document.getElementById('send-message');
const msg_input =  document.getElementById('message-input');
const no_msg = document.getElementById('no-msg');

function sendMessage(){
	linode = document.createElement("li");
	txtNode = document.createTextNode(msg_input.value);
	linode.appendChild(txtNode);
	msg_list.appendChild(linode);
	msg_input.value = "";
}