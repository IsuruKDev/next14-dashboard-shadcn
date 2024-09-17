import CaseHistory from '@/components/ui/CaseHistory'
import ClientDetails from '@/components/ui/ClientDetails'
import NewCase from '@/components/ui/NewCase'
import React from 'react'


const CaseHistoryForm = () => {

    return (
        <>
            <div className='m-4 space-y-4'>
                <div className='font-bold'>Case History Form</div>
                <ClientDetails />
                <CaseHistory />
                <NewCase />
            </div>


        </>
    )
}

export default CaseHistoryForm