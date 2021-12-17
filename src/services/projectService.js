import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/projects/`

export const getAllProjects = async () => {
  try {
    const res = await fetch(`${BASE_URL}`, {
      method: "GET",
      headers: {
        'content-type': 'application/json',
        "Authorization": `Bearer ${tokenService.getToken()}`
      },
    })
    const data = await res.json()
    // console.log('service', data);
    return data
  } catch (error) {
    throw error
  }
}

export const createProjcet = async (project) => {
  try {
    const res = await fetch(`${BASE_URL}`, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(project)
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}