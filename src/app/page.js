import Component from './component'

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center p-48" style={{
          backgroundImage: 'url("de_mol.jpeg")', 
          width: '75%',
          marginLeft: 'auto',
          marginRight: 'auto',
          backgroundPosition: 'center',
          
          }}>
          <Component />
    </main>
  )
}
