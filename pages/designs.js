import GridLayout from '@/components/Featured/GridLayout'
import Card from '@/components/Featured/Card'

import { getAllDesigns } from '../lib/api'

export default function AllDesigns({ designs }) {
  return (
    <GridLayout>
      {designs.map(design => (
        <Card key={design.id} design={design} />
      ))}
    </GridLayout>
  )
}

export async function getStaticProps() {
  const { designs } = await getAllDesigns()

  return {
    props: {
      designs,
    },
    revalidate: 1800,
  }
}
