import Search from '@/components/Search'

export default function WithSearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Search show={true} />
      {children}
    </>
  )
}