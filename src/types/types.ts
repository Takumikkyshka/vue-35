export interface EditingInput {
  id: number
  text: string
}

export interface Todo {
  id: number
  title: string
  completed: boolean
}

export interface Product {
  id: string
  title: string
  brand: string
  category: string
  price: number
  oldPrice: number // опционально, так как может не быть старой цены
  rating: number
  reviewsCount: number
  description: string
  inStock: boolean
  colors: string[]
  sizes: (number | string)[] // может быть как число (40), так и строка ("S", "M", "L")
  popular: boolean
  new: boolean
  sale: boolean
}

export interface CurrencyData {
  date: string
  rub: Record<string, number>
}
