interface Database {
  users: {
    id: string
    firstName: string
    lastName: string
    email: string
    password: string
  }[]
}

export default Database
