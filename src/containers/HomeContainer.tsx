import React from 'react';
import {HomeScreen} from '../screens';

const albums = {
  feed: {
    author: {
      name: {label: 'iTunes Store'},
      uri: {label: 'http://www.apple.com/uk/itunes/'},
    },
    entry: [
      {
        'im:name': {label: 'Never Before - EP'},
        'im:image': [
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/05/4e/31/054e31f4-821b-0a0c-1ab1-5326c20ade97/8902633343801.jpg/55x55bb.png',
            attributes: {height: '55'},
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/05/4e/31/054e31f4-821b-0a0c-1ab1-5326c20ade97/8902633343801.jpg/60x60bb.png',
            attributes: {height: '60'},
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/05/4e/31/054e31f4-821b-0a0c-1ab1-5326c20ade97/8902633343801.jpg/170x170bb.png',
            attributes: {height: '170'},
          },
        ],
        'im:itemCount': {label: '5'},
        'im:price': {
          label: '₹ 90',
          attributes: {amount: '90.00', currency: 'INR'},
        },
        'im:contentType': {
          'im:contentType': {attributes: {term: 'Album', label: 'Album'}},
          attributes: {term: 'Music', label: 'Music'},
        },
        rights: {label: '℗ 2023 Times Music / Speed Records'},
        title: {label: 'Never Before - EP - Jordan Sandhu'},
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://music.apple.com/in/album/never-before-ep/1683490089?uo=2',
          },
        },
        id: {
          label:
            'https://music.apple.com/in/album/never-before-ep/1683490089?uo=2',
          attributes: {'im:id': '1683490089'},
        },
        'im:artist': {
          label: 'Jordan Sandhu',
          attributes: {
            href: 'https://music.apple.com/in/artist/jordan-sandhu/1189926963?uo=2',
          },
        },
        category: {
          attributes: {
            'im:id': '1185',
            term: 'Indian Pop',
            scheme:
              'https://music.apple.com/in/genre/music-indian-indian-pop/id1185?uo=2',
            label: 'Indian Pop',
          },
        },
        'im:releaseDate': {
          label: '2023-05-02T00:00:00-07:00',
          attributes: {label: '02 May 2023'},
        },
      },
      {
        'im:name': {label: 'The Wizard'},
        'im:image': [
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/b9/a4/72/b9a472dd-d7e2-9854-9449-43f0151496ae/cover.jpg/55x55bb.png',
            attributes: {height: '55'},
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/b9/a4/72/b9a472dd-d7e2-9854-9449-43f0151496ae/cover.jpg/60x60bb.png',
            attributes: {height: '60'},
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/b9/a4/72/b9a472dd-d7e2-9854-9449-43f0151496ae/cover.jpg/170x170bb.png',
            attributes: {height: '170'},
          },
        ],
        'im:itemCount': {label: '5'},
        'im:price': {
          label: '₹ 80',
          attributes: {amount: '80.00', currency: 'INR'},
        },
        'im:contentType': {
          'im:contentType': {attributes: {term: 'Album', label: 'Album'}},
          attributes: {term: 'Music', label: 'Music'},
        },
        rights: {label: '℗ 2018 Bar 25 Music'},
        title: {label: 'The Wizard - Marco Tegui & VRuno'},
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://music.apple.com/in/album/the-wizard/1478016420?uo=2',
          },
        },
        id: {
          label: 'https://music.apple.com/in/album/the-wizard/1478016420?uo=2',
          attributes: {'im:id': '1478016420'},
        },
        'im:artist': {
          label: 'Marco Tegui & VRuno',
          attributes: {
            href: 'https://music.apple.com/in/artist/marco-tegui/500377131?uo=2',
          },
        },
        category: {
          attributes: {
            'im:id': '1058',
            term: 'Electronica',
            scheme:
              'https://music.apple.com/in/genre/music-electronic-electronica/id1058?uo=2',
            label: 'Electronica',
          },
        },
        'im:releaseDate': {
          label: '2018-01-19T00:00:00-07:00',
          attributes: {label: '19 January 2018'},
        },
      },
      {
        'im:name': {
          label:
            '111 Meditation Journey to Inner Peace – Buddha, Serenity Prayer, Relaxation Guide, Zen Music for Stillness, Mindfulness Therapy, Life in Harmony, Yoga',
        },
        'im:image': [
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/65/21/79/652179b6-60e2-7f0a-ab06-39255508e465/8184190925342.jpg/55x55bb.png',
            attributes: {height: '55'},
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Music127/v4/65/21/79/652179b6-60e2-7f0a-ab06-39255508e465/8184190925342.jpg/60x60bb.png',
            attributes: {height: '60'},
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Music127/v4/65/21/79/652179b6-60e2-7f0a-ab06-39255508e465/8184190925342.jpg/170x170bb.png',
            attributes: {height: '170'},
          },
        ],
        'im:itemCount': {label: '111'},
        'im:price': {
          label: '₹ 120',
          attributes: {amount: '120.00', currency: 'INR'},
        },
        'im:contentType': {
          'im:contentType': {attributes: {term: 'Album', label: 'Album'}},
          attributes: {term: 'Music', label: 'Music'},
        },
        rights: {label: '℗ 2017 New Age NY Records'},
        title: {
          label:
            '111 Meditation Journey to Inner Peace – Buddha, Serenity Prayer, Relaxation Guide, Zen Music for Stillness, Mindfulness Therapy, Life in Harmony, Yoga - Various Artists',
        },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://music.apple.com/in/album/111-meditation-journey-to-inner-peace-buddha-serenity/1255620873?uo=2',
          },
        },
        id: {
          label:
            'https://music.apple.com/in/album/111-meditation-journey-to-inner-peace-buddha-serenity/1255620873?uo=2',
          attributes: {'im:id': '1255620873'},
        },
        'im:artist': {label: 'Various Artists'},
        category: {
          attributes: {
            'im:id': '13',
            term: 'New Age',
            scheme: 'https://music.apple.com/in/genre/music-new-age/id13?uo=2',
            label: 'New Age',
          },
        },
        'im:releaseDate': {
          label: '2017-06-27T00:00:00-07:00',
          attributes: {label: '27 June 2017'},
        },
      },
      {
        'im:name': {label: '40 Summer Trance Hits 2013'},
        'im:image': [
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Music/v4/53/20/c8/5320c8b9-42e9-509e-73f2-21a076cbb1d8/8718522024948.jpg/55x55bb.png',
            attributes: {height: '55'},
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Music/v4/53/20/c8/5320c8b9-42e9-509e-73f2-21a076cbb1d8/8718522024948.jpg/60x60bb.png',
            attributes: {height: '60'},
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Music/v4/53/20/c8/5320c8b9-42e9-509e-73f2-21a076cbb1d8/8718522024948.jpg/170x170bb.png',
            attributes: {height: '170'},
          },
        ],
        'im:itemCount': {label: '40'},
        'im:price': {
          label: '₹ 110',
          attributes: {amount: '110.00', currency: 'INR'},
        },
        'im:contentType': {
          'im:contentType': {attributes: {term: 'Album', label: 'Album'}},
          attributes: {term: 'Music', label: 'Music'},
        },
        rights: {label: '℗ 2013 Armada Music B.V.'},
        title: {label: '40 Summer Trance Hits 2013 - Various Artists'},
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://music.apple.com/in/album/40-summer-trance-hits-2013/658330455?uo=2',
          },
        },
        id: {
          label:
            'https://music.apple.com/in/album/40-summer-trance-hits-2013/658330455?uo=2',
          attributes: {'im:id': '658330455'},
        },
        'im:artist': {label: 'Various Artists'},
        category: {
          attributes: {
            'im:id': '17',
            term: 'Dance',
            scheme: 'https://music.apple.com/in/genre/music-dance/id17?uo=2',
            label: 'Dance',
          },
        },
        'im:releaseDate': {
          label: '2013-07-12T00:00:00-07:00',
          attributes: {label: '12 July 2013'},
        },
      },
      {
        'im:name': {label: '25'},
        'im:image': [
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/62/bc/87/62bc8791-2a12-4b01-8928-d601684a951c/634904074005.png/55x55bb.png',
            attributes: {height: '55'},
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/62/bc/87/62bc8791-2a12-4b01-8928-d601684a951c/634904074005.png/60x60bb.png',
            attributes: {height: '60'},
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/62/bc/87/62bc8791-2a12-4b01-8928-d601684a951c/634904074005.png/170x170bb.png',
            attributes: {height: '170'},
          },
        ],
        'im:itemCount': {label: '11'},
        'im:price': {
          label: '₹ 120',
          attributes: {amount: '120.00', currency: 'INR'},
        },
        'im:contentType': {
          'im:contentType': {attributes: {term: 'Album', label: 'Album'}},
          attributes: {term: 'Music', label: 'Music'},
        },
        rights: {label: '℗ 2015 XL Recordings Ltd'},
        title: {label: '25 - Adele'},
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://music.apple.com/in/album/25/1051331933?uo=2',
          },
        },
        id: {
          label: 'https://music.apple.com/in/album/25/1051331933?uo=2',
          attributes: {'im:id': '1051331933'},
        },
        'im:artist': {
          label: 'Adele',
          attributes: {
            href: 'https://music.apple.com/in/artist/adele/262836961?uo=2',
          },
        },
        category: {
          attributes: {
            'im:id': '14',
            term: 'Pop',
            scheme: 'https://music.apple.com/in/genre/music-pop/id14?uo=2',
            label: 'Pop',
          },
        },
        'im:releaseDate': {
          label: '2015-11-20T00:00:00-07:00',
          attributes: {label: '20 November 2015'},
        },
      },
      {
        'im:name': {label: 'Kabali (Original Motion Picture Soundtrack)'},
        'im:image': [
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/e8/34/bd/e834bdd8-e0e9-d942-2e91-53f01157bd76/cover.jpg/55x55bb.png',
            attributes: {height: '55'},
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/e8/34/bd/e834bdd8-e0e9-d942-2e91-53f01157bd76/cover.jpg/60x60bb.png',
            attributes: {height: '60'},
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/e8/34/bd/e834bdd8-e0e9-d942-2e91-53f01157bd76/cover.jpg/170x170bb.png',
            attributes: {height: '170'},
          },
        ],
        'im:itemCount': {label: '5'},
        'im:price': {
          label: '₹ 80',
          attributes: {amount: '80.00', currency: 'INR'},
        },
        'im:contentType': {
          'im:contentType': {attributes: {term: 'Album', label: 'Album'}},
          attributes: {term: 'Music', label: 'Music'},
        },
        rights: {label: '℗ 2016 Think Music'},
        title: {
          label:
            'Kabali (Original Motion Picture Soundtrack) - Santhosh Narayanan',
        },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://music.apple.com/in/album/kabali-original-motion-picture-soundtrack/1121588626?uo=2',
          },
        },
        id: {
          label:
            'https://music.apple.com/in/album/kabali-original-motion-picture-soundtrack/1121588626?uo=2',
          attributes: {'im:id': '1121588626'},
        },
        'im:artist': {
          label: 'Santhosh Narayanan',
          attributes: {
            href: 'https://music.apple.com/in/artist/santhosh-narayanan/561507776?uo=2',
          },
        },
        category: {
          attributes: {
            'im:id': '1264',
            term: 'Tamil',
            scheme:
              'https://music.apple.com/in/genre/music-indian-regional-indian-tamil/id1264?uo=2',
            label: 'Tamil',
          },
        },
        'im:releaseDate': {
          label: '2016-06-11T00:00:00-07:00',
          attributes: {label: '11 June 2016'},
        },
      },
      {
        'im:name': {label: 'Ghost Stories'},
        'im:image': [
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Features125/v4/60/90/ad/6090adc3-8863-861d-afcc-23c55c6fe5da/dj.vmtulfyu.jpg/55x55bb.png',
            attributes: {height: '55'},
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Features125/v4/60/90/ad/6090adc3-8863-861d-afcc-23c55c6fe5da/dj.vmtulfyu.jpg/60x60bb.png',
            attributes: {height: '60'},
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Features125/v4/60/90/ad/6090adc3-8863-861d-afcc-23c55c6fe5da/dj.vmtulfyu.jpg/170x170bb.png',
            attributes: {height: '170'},
          },
        ],
        'im:itemCount': {label: '9'},
        'im:price': {
          label: '₹ 150',
          attributes: {amount: '150.00', currency: 'INR'},
        },
        'im:contentType': {
          'im:contentType': {attributes: {term: 'Album', label: 'Album'}},
          attributes: {term: 'Music', label: 'Music'},
        },
        rights: {
          label:
            '℗ 2014 Parlophone Records Limited, a Warner Music Group Company.',
        },
        title: {label: 'Ghost Stories - Coldplay'},
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://music.apple.com/in/album/ghost-stories/829909653?uo=2',
          },
        },
        id: {
          label:
            'https://music.apple.com/in/album/ghost-stories/829909653?uo=2',
          attributes: {'im:id': '829909653'},
        },
        'im:artist': {
          label: 'Coldplay',
          attributes: {
            href: 'https://music.apple.com/in/artist/coldplay/471744?uo=2',
          },
        },
        category: {
          attributes: {
            'im:id': '20',
            term: 'Alternative',
            scheme:
              'https://music.apple.com/in/genre/music-alternative/id20?uo=2',
            label: 'Alternative',
          },
        },
        'im:releaseDate': {
          label: '2014-05-19T00:00:00-07:00',
          attributes: {label: '19 May 2014'},
        },
      },
      {
        'im:name': {
          label: 'O Kadhal Kanmani (Original Motion Picture Soundtrack)',
        },
        'im:image': [
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/d5/01/c2/d501c21b-266f-2db3-2abf-ca5d928e5649/886445180336.jpg/55x55bb.png',
            attributes: {height: '55'},
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/d5/01/c2/d501c21b-266f-2db3-2abf-ca5d928e5649/886445180336.jpg/60x60bb.png',
            attributes: {height: '60'},
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/d5/01/c2/d501c21b-266f-2db3-2abf-ca5d928e5649/886445180336.jpg/170x170bb.png',
            attributes: {height: '170'},
          },
        ],
        'im:itemCount': {label: '9'},
        'im:price': {
          label: '₹ 160',
          attributes: {amount: '160.00', currency: 'INR'},
        },
        'im:contentType': {
          'im:contentType': {attributes: {term: 'Album', label: 'Album'}},
          attributes: {term: 'Music', label: 'Music'},
        },
        rights: {label: '℗ 2015 Sony Music Entertainment India Pvt. Ltd.'},
        title: {
          label:
            'O Kadhal Kanmani (Original Motion Picture Soundtrack) - A.R. Rahman',
        },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://music.apple.com/in/album/o-kadhal-kanmani-original-motion-picture-soundtrack/980176945?uo=2',
          },
        },
        id: {
          label:
            'https://music.apple.com/in/album/o-kadhal-kanmani-original-motion-picture-soundtrack/980176945?uo=2',
          attributes: {'im:id': '980176945'},
        },
        'im:artist': {
          label: 'A.R. Rahman',
          attributes: {
            href: 'https://music.apple.com/in/artist/a-r-rahman/3249567?uo=2',
          },
        },
        category: {
          attributes: {
            'im:id': '1264',
            term: 'Tamil',
            scheme:
              'https://music.apple.com/in/genre/music-indian-regional-indian-tamil/id1264?uo=2',
            label: 'Tamil',
          },
        },
        'im:releaseDate': {
          label: '2015-04-04T00:00:00-07:00',
          attributes: {label: '04 April 2015'},
        },
      },
      {
        'im:name': {label: 'A Head Full of Dreams'},
        'im:image': [
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/c8/0a/6d/c80a6df9-e55a-fb83-0311-f4776984ac67/mzm.lasidxkv.jpg/55x55bb.png',
            attributes: {height: '55'},
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/c8/0a/6d/c80a6df9-e55a-fb83-0311-f4776984ac67/mzm.lasidxkv.jpg/60x60bb.png',
            attributes: {height: '60'},
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/c8/0a/6d/c80a6df9-e55a-fb83-0311-f4776984ac67/mzm.lasidxkv.jpg/170x170bb.png',
            attributes: {height: '170'},
          },
        ],
        'im:itemCount': {label: '11'},
        'im:price': {
          label: '₹ 150',
          attributes: {amount: '150.00', currency: 'INR'},
        },
        'im:contentType': {
          'im:contentType': {attributes: {term: 'Album', label: 'Album'}},
          attributes: {term: 'Music', label: 'Music'},
        },
        rights: {
          label:
            '℗ 2015 Parlophone Records Limited, a Warner Music Group Company',
        },
        title: {label: 'A Head Full of Dreams - Coldplay'},
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://music.apple.com/in/album/a-head-full-of-dreams/1053933969?uo=2',
          },
        },
        id: {
          label:
            'https://music.apple.com/in/album/a-head-full-of-dreams/1053933969?uo=2',
          attributes: {'im:id': '1053933969'},
        },
        'im:artist': {
          label: 'Coldplay',
          attributes: {
            href: 'https://music.apple.com/in/artist/coldplay/471744?uo=2',
          },
        },
        category: {
          attributes: {
            'im:id': '20',
            term: 'Alternative',
            scheme:
              'https://music.apple.com/in/genre/music-alternative/id20?uo=2',
            label: 'Alternative',
          },
        },
        'im:releaseDate': {
          label: '2015-12-04T00:00:00-07:00',
          attributes: {label: '04 December 2015'},
        },
      },
      {
        'im:name': {
          label: 'Bhaag Milkha Bhaag (Original Motion Picture Soundtrack)',
        },
        'im:image': [
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/fe/9e/54/fe9e54da-11a4-0c61-4adc-f2ac9d8d4416/886444045575.jpg/55x55bb.png',
            attributes: {height: '55'},
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/fe/9e/54/fe9e54da-11a4-0c61-4adc-f2ac9d8d4416/886444045575.jpg/60x60bb.png',
            attributes: {height: '60'},
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/fe/9e/54/fe9e54da-11a4-0c61-4adc-f2ac9d8d4416/886444045575.jpg/170x170bb.png',
            attributes: {height: '170'},
          },
        ],
        'im:itemCount': {label: '8'},
        'im:price': {
          label: '₹ 140',
          attributes: {amount: '140.00', currency: 'INR'},
        },
        'im:contentType': {
          'im:contentType': {attributes: {term: 'Album', label: 'Album'}},
          attributes: {term: 'Music', label: 'Music'},
        },
        rights: {label: '℗ 2013 Sony Music Entertainment India Pvt. Ltd.'},
        title: {
          label:
            'Bhaag Milkha Bhaag (Original Motion Picture Soundtrack) - Shankar Ehsaan Loy',
        },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://music.apple.com/in/album/bhaag-milkha-bhaag-original-motion-picture-soundtrack/660158566?uo=2',
          },
        },
        id: {
          label:
            'https://music.apple.com/in/album/bhaag-milkha-bhaag-original-motion-picture-soundtrack/660158566?uo=2',
          attributes: {'im:id': '660158566'},
        },
        'im:artist': {
          label: 'Shankar Ehsaan Loy',
          attributes: {
            href: 'https://music.apple.com/in/artist/shankar-ehsaan-loy/280171893?uo=2',
          },
        },
        category: {
          attributes: {
            'im:id': '1263',
            term: 'Bollywood',
            scheme:
              'https://music.apple.com/in/genre/music-indian-bollywood/id1263?uo=2',
            label: 'Bollywood',
          },
        },
        'im:releaseDate': {
          label: '2013-06-14T00:00:00-07:00',
          attributes: {label: '14 June 2013'},
        },
      },
    ],
    updated: {label: '2023-05-11T08:26:46-07:00'},
    rights: {label: 'Copyright 2008 Apple Inc.'},
    title: {label: 'iTunes Store: Top Albums'},
    icon: {label: 'http://itunes.apple.com/favicon.ico'},
    link: [
      {
        attributes: {
          rel: 'alternate',
          type: 'text/html',
          href: 'https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewTop?cc=in&id=134581&popId=11',
        },
      },
      {
        attributes: {
          rel: 'self',
          href: 'https://mzstoreservices-int-st.itunes.apple.com/in/rss/topalbums/limit=10/json',
        },
      },
    ],
    id: {
      label:
        'https://mzstoreservices-int-st.itunes.apple.com/in/rss/topalbums/limit=10/json',
    },
  },
};

export interface IHomeContainerProps {}

function HomeContainer(props: IHomeContainerProps) {
  return <HomeScreen albums={albums?.feed?.entry} />;
}

export default HomeContainer;
