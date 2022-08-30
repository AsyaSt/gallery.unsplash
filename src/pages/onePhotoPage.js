import { useEffect } from 'react';
import {connect}   from 'react-redux';
import { Link } from 'react-router-dom';
import { actionGetOnePhoto } from '../store/promiseReducer';
import { store } from '../store/store';


let ChosenPhoto = (props ) => {
    let id = window.location.href.split('/')[4];
    const getAnswer = () => {
        store.dispatch(actionGetOnePhoto(id));
    }

    useEffect(() => {
        getAnswer();
      }, []);
      
    console.log(id);
    
    return(
        <div className='single-content' style={{background:`url(${props.photo?.urls?.regular}) no-repeat center center/cover`}}>
            <div className='single-blur'>
                <div className='single-body'>
                    <Link className='back' to={'/'}>Back to gallery</Link>
                    <img src={props.photo?.urls?.regular} alt={'asd'} className='single-image' />
                    <div className='single-description'>    
                        <div className='single-author'>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" className='single-author' width="20" height="20" viewBox="0 0 512 512"><path d="M64 64V48C64 39.16 71.16 32 80 32H144C152.8 32 160 39.16 160 48V64H192L242.5 38.76C251.4 34.31 261.2 32 271.1 32H448C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V128C0 92.65 28.65 64 64 64zM220.6 121.2C211.7 125.7 201.9 128 192 128H64V192H178.8C200.8 176.9 227.3 168 256 168C284.7 168 311.2 176.9 333.2 192H448V96H271.1L220.6 121.2zM256 216C207.4 216 168 255.4 168 304C168 352.6 207.4 392 256 392C304.6 392 344 352.6 344 304C344 255.4 304.6 216 256 216z"/></svg>
                                {props.photo?.user?.username}
                            </p>
                            <p>
                                {props.photo?.likes} 
                                <svg xmlns="http://www.w3.org/2000/svg" className='single-like' width="20" height="20" viewBox="0 0 512 512"><path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/></svg>
                            </p>
                        </div>
                        <p>{props.photo?.description ? `${props.photo?.description}` : ''}</p>
                    </div>
                </div>
            </div>
    </div>
    )
}

export const COnePhoto = connect(state => ({photo: state?.promise?.onephoto?.payload || {}} ) )(ChosenPhoto);