import React from 'react'
import DeleteBlock from './DeleteBlock'
import PriorityDisplay from './PriorityDisplay'
import ProgressDisplay from './ProgressDisplay'
import Link from 'next/link'
import StatusDisplay from './StatusDisplay'


const DisplayBugs = ({bug}) => {

    const formatTimestamp = (timestamp) => {
        const options = {
            year: 'numeric',
            day: '2-digit',
            month: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        }
        const date = new Date(timestamp)
        const formattedDate = date.toLocaleString("en-US", options)
        // formattedDate.format("%d-%m-%Y %H:%M:%S");
        
        return formattedDate
    }
  return (
    <div className='flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2'>
        <div className='flex mb-3 '>
        <PriorityDisplay priority={bug.priority}/>
        {/* <div className='ml-auto'>
        <DeleteBlock id={bug._id} />
        </div> */}
        </div>
        {/* <Link href={`/bugpage/${bug._id}`} style={{display: 'contents'}}>  */}
        
        <h4>{bug.title}</h4>
        <hr className='h-px border-0 bg-page mb-2'/>
        <p className='whitespace-pre-wrap'>
               {bug.description}
        </p>
        <div className='flex-grow'></div>
        <div className='flex mt-2'>
        <div className='flex flex-col '>
            <p className='text-xs my-1'>
                {formatTimestamp(bug.createdAt)}
            </p>
            <ProgressDisplay progress={bug.progress}/>
        </div>
        <div className='ml-auto flex items-end'>
            <StatusDisplay status={bug.status}/>
        </div>
        </div>
        {/* </Link> */}
    </div>
  )
}

export default DisplayBugs