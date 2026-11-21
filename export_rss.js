let Parser = require('rss-parser')
let fs = require('fs')
let querystring = require('querystring')
let urlMod = require('url')
let URL = urlMod.URL

let feedxUrls = {
  '放眼看世界': 'http://www.youtube.com/feeds/videos.xml?playlist_id=UUhhALDW7rmXg42FgiwIWdDA',
  '九哥记': 'http://www.youtube.com/feeds/videos.xml?playlist_id=UUfz12vhnTQkbLyeDAm5LCMA',
  '无修饰的中国': 'http://www.youtube.com/feeds/videos.xml?playlist_id=UUXQg8FJ_kp2awqhTD4G5djQ',
  'WilliamWorks Tv': 'http://www.youtube.com/feeds/videos.xml?playlist_id=UUQMVbZda2oxcCkFqXD3dm6Q',
  'HEYFLY嘿飛人': 'http://www.youtube.com/feeds/videos.xml?playlist_id=UUqgkhQMhWX-NMiNniNjFE5w',
  '大牛In China': 'http://www.youtube.com/feeds/videos.xml?playlist_id=UURT2Bbvrq7BdTnu5qKSFT1Q',
  'LyLy TV越南生活': 'http://www.youtube.com/feeds/videos.xml?playlist_id=UUgUUKN51WMywzlI-cuMzD8w',
  '打工妹四妹': 'http://www.youtube.com/feeds/videos.xml?playlist_id=UUp8uWkn-Jf38NxiYGk-tPEQ',
  '渺渺看世界': 'http://www.youtube.com/feeds/videos.xml?playlist_id=UU5cPhHflvY4Kii4caZgFUGw',
  '小叔TV': 'http://www.youtube.com/feeds/videos.xml?playlist_id=UUPNfoYdMopKZKlaTB92g-QQ',
  '十年漂泊 Fly X': 'http://www.youtube.com/feeds/videos.xml?playlist_id=UUCB378oYIajik1Zpxq8vm1w',
  '陈秋实': 'http://www.youtube.com/feeds/videos.xml?playlist_id=UUv361SF6FKznoGPKEFG9Yhw',
  '方斌': 'http://www.youtube.com/feeds/videos.xml?playlist_id=UURItarzSwqakT-EZkSvuy3A',
  '李泽华': 'http://www.youtube.com/feeds/videos.xml?playlist_id=UUJHUpBCNKrZwBhxfcIrP8Aw',
  '张展': 'http://www.youtube.com/feeds/videos.xml?playlist_id=UUsNKkvZGMURFmYkfhYa2HOQ',
  'serpentza': 'http://www.youtube.com/feeds/videos.xml?playlist_id=UUl7mAGnY4jh4Ps8rhhh8XZg',
}


keys = Object.keys(feedxUrls)
jsonarr = keys.map(key => {
	return {'site': key, 'url':feedxUrls[key]}
})

let content = JSON.stringify(jsonarr, undefined, 4);
fs.writeFileSync(`./subs.json`, content)
