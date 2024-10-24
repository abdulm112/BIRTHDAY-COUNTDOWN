import { useEffect, useState } from 'react'

const Down = () => {
    const [days, setDays] = useState()
    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [sec, setSec] = useState()
    const [isLoading, setIsLoading] =useState(true)
    
    const Countdown = () => {
        const endate = new Date("October 28, 2024 00:00:00").getTime()
        const today = new Date().getTime()

        const reminder = endate - today
        
        const sec = 1000
        const minutes = 60 * sec
        const hours = 60 * minutes
        const days = 24 * hours

        let timeDays = Math.floor((reminder / days))
        let timeHours = Math.floor((reminder % days / hours))
        let timeMinutes = Math.floor((reminder % hours / minutes))
        let timeSec = Math.floor((reminder % minutes / sec))

        timeHours = timeHours < 10 ? "0" + timeHours : timeHours
        timeSec = timeSec < 10 ? "0" + timeSec : timeSec
        timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes
        timeDays = timeDays < 10 ? "0" + timeDays : timeDays

        setDays(timeDays)
        setHours(timeHours)
        setMinutes(timeMinutes)
        setSec(timeSec)
        setIsLoading(false)
        
    } 

    useEffect(() => {
        setInterval(Countdown, 1000)
    })
        
  return (
    <div className=''>
     {
        isLoading ? (
            <h1 className='text-center pt-52'>LOADING........</h1>
        ):(
            <section className="container">
            <div className="flex flex-col gap-20 bg-zinc-950 px-20 py-30 max-sm:px-4 rounded-3xl items-center max-sm:gap-16">
              <article className='pt-5 max-sm:pt-3'>
                   <h1 className='text-white text-[16px] uppercase'>Countdown to <span className='text-blue-700'>Abdulmujeeb's </span> Birthday</h1>
              </article>
              <article className='flex gap-10 max-sm:gap-2'>
              <legend className='flex items-center flex-col bg-blue-700 shadow-lg w-20 max-sm:w-17 max-sm:p-2 p-3 rounded-lg text-white'>
                  <p>{days}</p>
                  <p  className='uppercase'>Days</p>
              </legend>
              <legend className='flex items-center flex-col bg-blue-700 shadow-lg w-20 max-sm:w-17 max-sm:p-2 p-3 rounded-lg text-white'>
                  <p>{hours}</p>
                  <p  className='uppercase'>Hours</p>
              </legend>
              <legend className='flex items-center flex-col bg-blue-700 shadow-lg w-20 max-sm:w-17 max-sm:p-2 p-3 rounded-lg text-white '>
                  <p>{minutes}</p>
                  <p  className='uppercase'>Minutes</p>
              </legend>
              <legend className='flex items-center flex-col bg-blue-700 shadow-lg w-20 max-sm:w-17 max-sm:p-2 p-3 rounded-lg text-white'>
                  <p>{sec}</p>
                  <p  className='uppercase'>Seconds</p>
              </legend>
              </article>
                  <article className='pb-5 max-sm:pb-3'>
                  <h1 className='text-blue-700 text-[22px] uppercase'>Birth-Date:28 OCT</h1>
                  </article>
            </div>
            
            </section>
        )
     }
    </div>
  )
}

export default Down
