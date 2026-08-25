import React from 'react'
import AddCarForm from 'src/components/Form/AddCarForm'
import AddNewCarSuccessModal from 'src/components/Modals/AddNewCarSuccessModal'

const AddCar = () => {
  return (
    <div className='h-200 flex justify-center items-center'>
        <AddCarForm/>
        <AddNewCarSuccessModal/>
    </div>
  )
}

export default AddCar