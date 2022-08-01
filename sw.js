self.addEventListener("push", function (event) {
    const message = event.data.json();
    self.registration.showNotification(
      'test message', {});;
        //  message.title, { body: message.text });
})