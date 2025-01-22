import app from './app'

const PORT: string | 5000 = process.env.PORT || 5000

app.listen(PORT, (): void => {
  console.log(`Server running on http://localhost:${PORT}`)
})
