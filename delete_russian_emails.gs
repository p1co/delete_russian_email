function delete_roosky() {
  var messages,
      threads = GmailApp.search('is:unread');
  for(var i=0; i<threads.length; i++) {
    messages = threads[i].getMessages();
    for(var j=0; j<messages.length; j++) {
      // getRawContent() did not properly show Cyrillic characters
      msg_garbage = messages[j].getPlainBody().match(/(\u0430|\u043E|\u0443|\u044D|\u044B|\u044F|\u0451|\u044E|\u0435|\u0438|\u044C)+/);
      sub_garbage = messages[j].getSubject().match(/(\u0430|\u043E|\u0443|\u044D|\u044B|\u044F|\u0451|\u044E|\u0435|\u0438|\u044C)+/);
      if (msg_garbage || sub_garbage) {
        Logger.log("DELETE: " + messages[j].getSubject());
        GmailApp.moveMessageToTrash(messages[j]);
      }
    }
  }
}
