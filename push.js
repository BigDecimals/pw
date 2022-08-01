var push = require ('web-push')

let vapidKeys = { publicKey:
    'BI9cLro0ucmmxm-_dYNxF1ifE4MtO664OE7y1JRfMA_lZDuqKNgly8xlR54QE0BupjzICVrYKf7tsrv1MFdyUTk',
   privateKey: '-2i9Tdd6HO6jkEw_QjrhNF-BtYi1GNmUVVwBF-huXFg' }

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {};
push.sendNotification(subscription, 'test message');