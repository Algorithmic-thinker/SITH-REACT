import {useRouteError} from 'react-router'

const ErrorPage = ()=>{
    const error = useRouteError();
    console.log("error",error);
    return(
        <div className='w-[100vw] h-[100vh] bg-blue-400'>
            <div className=' border border-transparent rounded-3xl bg-blue-700 p-7 font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl'>
                <div className='text-center'>
                    <i class="fa-solid fa-triangle-exclamation text-5xl text-red-900"></i>
                </div>
                <div>
                    <h1 >Oops...something went wrong</h1>
                    <h1 className='text-red-900'>status : {error?.status} - {error?.statusText}</h1>
                    <h1 className='underline underline-offset-4 italic'>{error?.error?.message}</h1>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage