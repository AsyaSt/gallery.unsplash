import {connect}   from 'react-redux';
import { Images } from '../components/image';
import { actionGetPhotoes } from '../store/promiseReducer';
import { store } from '../store/store';


const CAllImages = connect(state => ({pics: state?.promise?.photos?.payload || []} ) )(Images);

export let GalleryAllPic = () => {
    store.dispatch(actionGetPhotoes());   
   return <CAllImages />
   }