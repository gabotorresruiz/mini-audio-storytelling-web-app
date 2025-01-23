import app from './app'

const PORT: string | 8000 = process.env.PORT || 8000

app.listen(PORT, (): void => {
  console.log(`Server running on http://localhost:${PORT}`)
})
