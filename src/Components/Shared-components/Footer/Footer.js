import React from 'react'

function Footer() {
  return (
    <div className='bg-black mt-10 px-10'>
      <div className="py-5">
        <div className="flex justify-between">
          <p className='text-white text-sm'>Copyright © 2022. All Right Reserved</p>
          <div className="flex gap-x-5">
            <button>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 14.84 3.44 18.87 8 19.8V13H6V10H8V7.5C8 5.57 9.57 4 11.5 4H14V7H12C11.45 7 11 7.45 11 8V10H14V13H11V19.95C16.05 19.45 20 15.19 20 10Z" fill="white"/>
              </svg>
            </button>
            <button>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6 9.6C12.6 10.3956 12.2839 11.1587 11.7213 11.7213C11.1587 12.2839 10.3956 12.6 9.6 12.6C8.80435 12.6 8.04129 12.2839 7.47868 11.7213C6.91607 11.1587 6.6 10.3956 6.6 9.6C6.6 9.429 6.618 9.262 6.649 9.1H5.6V13.097C5.6 13.375 5.825 13.6 6.103 13.6H13.098C13.2312 13.5997 13.3589 13.5466 13.453 13.4523C13.5471 13.358 13.6 13.2302 13.6 13.097V9.1H12.551C12.582 9.262 12.6 9.429 12.6 9.6V9.6ZM9.6 11.6C9.86271 11.5999 10.1228 11.5481 10.3655 11.4475C10.6082 11.3469 10.8287 11.1995 11.0144 11.0137C11.2001 10.8279 11.3474 10.6073 11.4479 10.3646C11.5484 10.1219 11.6001 9.86171 11.6 9.599C11.5999 9.33629 11.5481 9.07617 11.4475 8.83348C11.3469 8.59079 11.1995 8.3703 11.0137 8.18458C10.8279 7.99886 10.6073 7.85156 10.3646 7.75109C10.1219 7.65061 9.86171 7.59893 9.599 7.599C9.06843 7.59913 8.55965 7.81003 8.18458 8.18529C7.80951 8.56055 7.59887 9.06943 7.599 9.6C7.59913 10.1306 7.81003 10.6393 8.18529 11.0144C8.56055 11.3895 9.06943 11.6001 9.6 11.6V11.6ZM12 7.5H13.199C13.2787 7.5 13.3551 7.46843 13.4115 7.41219C13.4679 7.35596 13.4997 7.27966 13.5 7.2V6.001C13.5 5.92117 13.4683 5.84461 13.4118 5.78816C13.3554 5.73171 13.2788 5.7 13.199 5.7H12C11.9202 5.7 11.8436 5.73171 11.7872 5.78816C11.7307 5.84461 11.699 5.92117 11.699 6.001V7.2C11.7 7.365 11.835 7.5 12 7.5V7.5ZM9.6 0C7.05392 0 4.61212 1.01143 2.81177 2.81177C1.01143 4.61212 0 7.05392 0 9.6C0 12.1461 1.01143 14.5879 2.81177 16.3882C4.61212 18.1886 7.05392 19.2 9.6 19.2C10.8607 19.2 12.109 18.9517 13.2738 18.4692C14.4385 17.9868 15.4968 17.2797 16.3882 16.3882C17.2797 15.4968 17.9868 14.4385 18.4692 13.2738C18.9517 12.109 19.2 10.8607 19.2 9.6C19.2 8.33931 18.9517 7.09096 18.4692 5.92624C17.9868 4.76151 17.2797 3.70322 16.3882 2.81177C15.4968 1.92033 14.4385 1.2132 13.2738 0.730757C12.109 0.248311 10.8607 0 9.6 0V0ZM14.6 13.489C14.6 14.1 14.1 14.6 13.489 14.6H5.711C5.1 14.6 4.6 14.1 4.6 13.489V5.711C4.6 5.1 5.1 4.6 5.711 4.6H13.489C14.1 4.6 14.6 5.1 14.6 5.711V13.489V13.489Z" fill="white"/>
              </svg>
            </button>
            <button>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18V18ZM10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20Z" fill="white"/>
                <path d="M15 6.94701C14.632 7.10701 14.237 7.21701 13.822 7.26501C14.246 7.01501 14.57 6.61901 14.724 6.14801C14.32 6.38348 13.8791 6.54913 13.42 6.63801C13.2269 6.43558 12.9945 6.27462 12.7372 6.16493C12.4798 6.05524 12.2028 5.99913 11.923 6.00001C10.79 6.00001 9.872 6.90501 9.872 8.02001C9.872 8.17801 9.89 8.33201 9.925 8.48001C9.11233 8.44142 8.31662 8.23385 7.58865 7.87056C6.86068 7.50726 6.21643 6.99621 5.697 6.37001C5.51456 6.67711 5.41851 7.02781 5.419 7.38501C5.419 8.08501 5.782 8.70501 6.332 9.06601C6.00644 9.0558 5.68786 8.96913 5.402 8.81301V8.83801C5.40509 9.30747 5.5708 9.76135 5.87092 10.1224C6.17103 10.4834 6.587 10.7292 7.048 10.818C6.74536 10.898 6.42869 10.9096 6.121 10.852C6.25513 11.2559 6.51167 11.608 6.85502 11.8594C7.19837 12.1108 7.61148 12.2491 8.037 12.255C7.30696 12.8176 6.41064 13.1215 5.489 13.119C5.324 13.119 5.161 13.109 5 13.091C5.94047 13.6863 7.03096 14.0016 8.144 14C11.918 14 13.981 10.922 13.981 8.25201L13.974 7.99001C14.3763 7.70729 14.7239 7.3539 15 6.94701V6.94701Z" fill="white"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer