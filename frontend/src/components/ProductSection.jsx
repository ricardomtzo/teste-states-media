import { memo } from 'react'
import SaltBurn1 from '../assets/img/SaltBurnMockup.png'
import SaltBurn3 from '../assets/img/3SaltBurn.png'
import SaltBurn6 from '../assets/img/6SaltBurn.png'

const products = [
  {
    id: 1,
    title: 'Try One',
    subtitle: '30 Days, 1 Bottles',
    units: 1,
    pricePerBottle: 89.00,
    savings: 681,
    guarantee: '60-DAYS GUARANTEE',
    offerTag: 'Basic Offer',
    total: 89,
    oldTotal: 157,
    shippingNote: '+ SHIPPING',
    ribbonGradient: 'from-pink-400 to-pink-500',
    accentColor: '#ec4899',
    imageUrl: SaltBurn1,
  },
  {
    id: 6,
    title: 'Good Value',
    subtitle: '180 Days, 6 Bottles',
    units: 6,
    pricePerBottle: 177.00,
    savings: 588,
    guarantee: '60-DAYS GUARANTEE',
    offerTag: 'Best Offer',
    total: 294,
    oldTotal: 582,
    shippingNote: '+ FREE US SHIPPING',
    ribbonGradient: 'from-stone-700 to-stone-800',
    accentColor: '#ec4899',
    highlight: true,
    doctorRecommended: true,
    imageUrl: SaltBurn6,
  },
  {
    id: 3,
    title: 'Best Value',
    subtitle: '90 Days, 3 Bottles',
    units: 3,
    pricePerBottle: 294.00,
    savings: 411,
    guarantee: '60-DAYS GUARANTEE',
    offerTag: 'Good Offer',
    total: 177,
    oldTotal: 568,
    shippingNote: '+ FREE US SHIPPING',
    ribbonGradient: 'from-pink-400 to-pink-500',
    accentColor: '#ec4899',
    imageUrl: SaltBurn3,
  },
]

function Price({ value }) {
  return (
    <div className="mt-2 flex items-end justify-center gap-1">
      <span className="text-3xl sm:text-4xl font-bold">${value}</span>
      <span className="text-xs sm:text-sm text-gray-700">Per Bottle</span>
    </div>
  )
}

function OrderButton({ label, sublabel, onClick }) {
  return (
    <button
      className="mt-3 w-full rounded-lg bg-gradient-to-b from-yellow-300 to-amber-400 border border-amber-500 shadow hover:from-yellow-200 hover:to-amber-300 py-3 text-black font-semibold"
      onClick={onClick}
    >
      {label}
      {sublabel && <div className="text-xs font-normal">{sublabel}</div>}
    </button>
  )
}

function ProductCard({ product, onOrderClick }) {
  const borderWidth = product.highlight ? 3 : 1
  const scale = product.highlight ? 'scale-[1.06]' : 'scale-[1]'
  const hoverScale = product.highlight ? 'hover:scale-[1.09]' : 'hover:scale-[1.03]'
  const imgSize = product.highlight ? 'w-52 sm:w-56 h-28 sm:h-32' : 'w-40 sm:w-48 h-24 sm:h-28'
  return (
    <div
      className={`rounded-xl bg-white shadow ${scale} ${hoverScale} overflow-hidden transition-transform duration-200 will-change-transform cursor-pointer max-w-[400px] my-10`}
      style={{ borderColor: product.accentColor, borderWidth }}
    >
      {/* Ribbon/title */}
      <div className={`relative bg-gradient-to-b ${product.ribbonGradient} text-white text-center py-3`}>
        <div className="font-semibold">{product.title}</div>
        <div className="text-xs opacity-90">{product.subtitle}</div>
        <div
          className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"
          aria-hidden="true"
        ></div>
      </div>

      {/* Body */}
      <div className={`p-4 ${product.highlight ? 'pt-8' : 'pt-6'}`}>

        {/* Image */}
        <div className="mt-3 flex justify-center">
          <img
            src={product.imageUrl}
            alt={`${product.units} Bottles`}
            className={`object-contain rounded ${imgSize}`}
            loading="lazy"
          />
        </div>

        {/* Price */}
        <Price value={product.pricePerBottle} />
        <p className="mt-1 text-center text-xs text-amber-600 font-semibold">YOU SAVE ${product.savings}!</p>

        {/* Guarantee */}
        <div className="mt-3 rounded-lg border border-gray-300 bg-gray-50 text-center py-2 text-sm font-semibold">
          {product.guarantee}
        </div>

        {/* Doctor recommended (only best value) */}
        {product.doctorRecommended && (
          <div className="mt-2 flex items-center justify-center gap-2 text-xs">
            <span className="h-4 w-4 rounded-sm bg-green-500 flex items-center justify-center text-white">✓</span>
            <span className="text-gray-800">THE TREATMENT RECOMMENDED FOR YOU BY THE DOCTOR</span>
          </div>
        )}

        {/* Order Now */}
        <OrderButton
          label="Order Now"
          sublabel={product.offerTag}
          onClick={() => onOrderClick?.(product)}
        />

        {/* Payment badges */}
        <div className="mt-3 flex justify-center gap-2 text-[10px]">
          <span className="px-2 py-1 rounded bg-gray-100 border">VISA</span>
          <span className="px-2 py-1 rounded bg-gray-100 border">Mastercard</span>
          <span className="px-2 py-1 rounded bg-gray-100 border">AMEX</span>
        </div>

        {/* Totals and shipping */}
        <div className="mt-3 text-center text-xs text-gray-800">
          <div>
            Total: <span className="line-through text-gray-500">${product.oldTotal}</span> <span className="font-semibold">${product.total}</span>
          </div>
          <div className="font-semibold">{product.shippingNote}</div>
        </div>
      </div>
    </div>
  )
}

const ProductSection = memo(function ProductSection({ onOrderClick }) {
  return (
    <section className="">
      <div className="rounded-2xl px-2">
        <div className="md:grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-3 items-stretch justify-items-center">
          {/* Left card */}
          <ProductCard product={products[0]} onOrderClick={onOrderClick} />

          {/* Middle card (larger) */}
          <ProductCard product={products[1]} onOrderClick={onOrderClick} />

          {/* Right card */}
          <ProductCard product={products[2]} onOrderClick={onOrderClick} />
        </div>
      </div>
    </section>
  )
})

export default ProductSection