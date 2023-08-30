'use client'
import React, { FormEvent, FormEventHandler, useState } from 'react'
import { Map } from '../Map/Map';
import { Slide } from 'react-awesome-reveal';


type ContactUI = {
    category: string;
    fullName: string;
    email: string;
    description: string;
}

export const Contact = () => {
    const [contact, setContact] = useState<ContactUI>({
        category: "",
        fullName: "",
        email: "",
        description: "",
    });

    const formHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const event = e.currentTarget.value;
        console.log(event)
    }

    return (
        <section id='contact' className='w-full bg-slate-900'>
            <div className=' xl:max-w-7xl mx-auto py-20'>
                <h3 className='text-slate-300 text-center font-medium text-2xl uppercase'>
                    Lets discuss about project
                </h3>

                <div className="mt-16 lg:grid lg:grid-cols-2 lg:place-content-center">
                    <Slide direction='left'>
                        <div className="contact__form px-6 lg:flex lg:items-center">
                            <form onSubmit={formHandler} className='[&>label]:text-slate-100 [&>label]:inline-block [&>label]:w-full [&>label:not(:last-child)]:mb-7 [&>label>input]:mt-2 [&>label>input]:p-3 [&>label>input]:block [&>label>input]:w-full [&>label>input]:outline-none [&>label>input]:rounded-md [&>label>input::placeholder]:text-slate-400 [&>label>input::placeholder]:text-sm [&>label>input]:text-slate-800 
                        [&>label>input]:bg-slate-50
                         focus:[&>label>input]:shadow-md focus:[&>label>input]:shadow-slate-700
                         '>
                                <label
                                    id='category'
                                    htmlFor='category'
                                >
                                    Category :
                                    <input
                                        type="text"
                                        name='category'
                                        placeholder='Web or App devlopment ...'
                                        required
                                        autoFocus
                                    />
                                </label>
                                <label
                                    id='fullName'
                                    htmlFor='fullName'
                                >
                                    Full Name :
                                    <input
                                        type="text"
                                        name='fullName'
                                        placeholder='e.g. Oliver Smith ...'
                                        required
                                    />
                                </label>
                                <label
                                    id='email'
                                    htmlFor='email'
                                >
                                    Email :
                                    <input
                                        type="email"
                                        name='email'
                                        placeholder='example@gmail.com'
                                        required
                                    />
                                </label>
                                <label
                                    id='description'
                                    htmlFor='description'
                                >
                                    Your Queries :
                                    <textarea
                                        name="description"
                                        rows={5}
                                        placeholder='Project details ...'
                                        className='block w-full text-slate-800 p-3 rounded-md mt-2 outline-none [textarea::placeholder]:text-sm bg-slate-50'
                                        required
                                    >
                                    </textarea>
                                </label>

                                <input type="submit" value="Submit" className='bg-sky-500 text-slate-100 block w-full
                             text-center p-3 uppercase font-semibold text-lg outline-none border-0 rounded-md cursor-pointer shadow-md shadow-sky-800 active:shadow-none'/>
                            </form>
                        </div>
                    </Slide>

                    <Slide direction='right'>
                        <Map />
                    </Slide>
                </div>
            </div>
        </section>
    )
};