import axios from 'axios';

export default class butterflyService{
  constructor(){
    this.service=axios.create({
      baseURL:"http://localhost:5000"
    });
  }
  getButterfly= () =>{
    return this.service.get('/')
    .then(data=>data.data)
  }

  newButterfly = butterfly =>{
    return this.service.post('/new',{...butterfly})
    .then(newButterfly=>newButterfly)
  }
}
