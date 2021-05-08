import GridLayout from './GridLayout'
import Header from './Header'
import Card from './Card'

export default function index({ designs }) {
  return (
    <>
      <Header />
      <GridLayout>
        {designs.map(design => (
          <Card key={design.id} design={design} />
        ))}
      </GridLayout>
    </>
  )
}
