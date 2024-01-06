export const Form = ({config}) => {

  return (
    <div className='flex flex-col gap-4'>
      {
        config.map((item, index) => {
          return (
              <div key={index}>
                <item.component {...item.props} size='lg' variant='bordered' radius='sm' />
              </div>
          )
        })
      }
    </div>
  )
}