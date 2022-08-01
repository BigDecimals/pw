var push = require ('web-push')

let vapidKeys = { publicKey:
    'BI9cLro0ucmmxm-_dYNxF1ifE4MtO664OE7y1JRfMA_lZDuqKNgly8xlR54QE0BupjzICVrYKf7tsrv1MFdyUTk',
   privateKey: '-2i9Tdd6HO6jkEw_QjrhNF-BtYi1GNmUVVwBF-huXFg' }

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

let subscription = {"endpoint":"https://wns2-bl2p.notify.windows.com/w/?token=BQYAAAD3j4ECyhEy8PPAiCYrbiqSlH4RQBkVVjwWs69LNmEElENxRWZw9YK6J5UBChSx39qFcqyb4%2ftATh1VCm2fiTsmlHORMQS2JSpVrg5pmDTbVHQ%2buG5%2fjcU3bNJ0zcJukbxPmIBVfInX%2bdWV8SHzOXqtkVJ%2feQf5POnlcfiR%2f%2flD9WghUdaI6hcwZ1J4d%2bTpK0cwxPvg11YjPwdET4rp6gdRy6WJ%2bFJNuYl3ZjI7%2fJsB8NtZo%2bppujxr8ZEy8F0fk9gkw2J3tSCQ3bwqHcirxNtCdwhLC%2faVufRRkZTbnhNn2CqsC%2fuHgXC90b9kjIE78L6LXMc3J0TV6uiVxA%2b9CyHEqpUB%2ba%2fukTivHkGQY%2fN%2ftA%3d%3d","expirationTime":null,"keys":{"p256dh":"BGHv-VnF2v6KpvdJatxW6uGJKAN90v-YJ2a-0B54r5Io1XS0nd03kHdIWGFOtvTOT2EMmYJ5jHPbGs4pkKOLTHo","auth":"KwjZnRfsaD0dMQYYWwh9Eg"}}
push.sendNotification(subscription, 'test message');