self.addEventListener("push", function (event) {
    self.registration.showNotification(
      'test message', {});;
        //  message.title, { body: message.text });
})