import yujiImg from '../src/assets/Yuji.svg';
import naogamiImg from '../src/assets/mahogamy.svg';
import gamaImg from '../src/assets/Gama.svg';
import senjuImg from '../src/assets/Senju.svg';
import  Woman from  '../src/assets/Yuji.svg'
import joepic from '../src/assets/john doe.svg'

import yujiPanImg from '../src/assets/Pancakes.svg';
import naogamiBuildiImg from '../src/assets/Building.svg';
import gamaVoliImg from '../src/assets/Volcano.svg';
import senjuIsliImg from '../src/assets/Island.svg'
import moon      from  '../src/assets/black moon.svg'
import Morocco  from '../src/assets/Morocco.svg'
import Chinese   from   '../src/assets/chinese.svg'
import Boat  from     '../src/assets/boat.svg'
import heartred  from  '../src/assets/heart red.svg'
import  heartempty from  '../src/assets/heart.svg'
import  messagesicon from '../src/assets/messages-2.svg'
import  sendicon  from  '../src/assets/send-2.svg'
import flower from '../src/assets/Flower.svg'
import brownhome from '../src/assets/brownhouse.svg'
import apartment from '../src/assets/balcony.svg'
import searock from '../src/assets/searock.svg'


export let people = [
  {
    id: 1,
    name: 'Yuji Itadori',
    time: '8 mins ago',
    post: 'Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.',
    profileImg: yujiImg,
    postImg: yujiPanImg,
    follow : 'following' ,
  },
  {
    id: 2,
    name: 'Naogami Shinya',
    time: '8 mins ago',
    post: 'Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.',
    profileImg: naogamiImg,
    postImg: naogamiBuildiImg,
    follow :` follow + `,

  },
  {    id: 3,
    name: 'Gama Oyabin',
    time: '8 mins ago',
    post: 'Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.',
    profileImg: gamaImg,
    postImg: gamaVoliImg,
    follow : 'following' ,

  },
  {
    id: 4,
    name: 'Senju Hashirama',
    time: '8 mins ago',
    post: 'Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.',
    profileImg: senjuImg,
    postImg: senjuIsliImg,
    follow :` follow +`,

  },
];
console.log(people);

// friends data
export const FriendsData = [
    {
      id: 1,
      title: "Yuji Itadori",
      time:"8 mins ago",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.",
      image:  moon,
      profile: Woman,
      statusbar: "Following",
      icon:heartred,icon2:messagesicon,icon3:sendicon,
    },
    {
      id: 2,
      title: "Yuji Itadori",
      time:"8 mins ago",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.",
      image: Morocco,
      profile: Woman ,
      statusbar: "Follow +",
      icon:heartempty,icon2:messagesicon,icon3:sendicon,
    },
    {
      id: 3,
      title: "Yuji Itadori",
      time:"8 mins ago",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.",
      image: Chinese,
      profile: Woman,
      statusbar: "Following",
      icon:heartempty,icon2:messagesicon,icon3:sendicon,
    },
    {
      id: 4,
      title: "Yuji Itadori",
      time:"8 mins ago",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.",
      image: Boat,
      profile: Woman,
      statusbar: "Follow +",
      icon:heartempty,icon2:messagesicon,icon3:sendicon,
    },
    ];
    console.log(FriendsData);  

// profile data
export const ProfileData = [
    {
      id: 1,
      title: "John Doe",
      time:"8 mins ago",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.",
      image:  flower,
      profile: joepic,
      icon:heartred,icon2:messagesicon,icon3:sendicon,
    },
    {
      id: 2,
      title: "John Doe",
      time:"8 mins ago",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.",
      image: brownhome,
      profile: joepic ,
      icon:heartempty,icon2:messagesicon,icon3:sendicon,
    },
    {
        id: 3,
        title: "John Doe",
        time:"8 mins ago",
        description:
          "Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.",
        image: apartment,
        profile: joepic,
        icon:heartempty,icon2:messagesicon,icon3:sendicon,
      },
      {
        id: 4,
        title: "John Doe",
        time:"8 mins ago",
        description:
          "Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.",
        image: searock,
        profile: joepic,
        icon:heartempty,icon2:messagesicon,icon3:sendicon,
      },
    ];
    
    
    
    
    
