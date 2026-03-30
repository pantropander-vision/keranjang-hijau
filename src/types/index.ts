// ─────────────────────────────────────────
// Keranjang Hijau — Core TypeScript Types
// ─────────────────────────────────────────

export type BusinessType =
  | 'restaurant' | 'cafe' | 'catering' | 'cloud_kitchen'
  | 'food_producer' | 'bakery' | 'food_truck'
  | 'supplier' | 'service_provider' | 'other'

export type ListingType = 'product' | 'service'
export type PricingType = 'fixed' | 'package' | 'negotiable'
export type DeliveryOption = 'pickup' | 'delivery' | 'both'
export type OrderType = 'product_order' | 'service_project'
export type OrderStatus = 'pending' | 'accepted' | 'in_progress' | 'delivered' | 'completed' | 'disputed' | 'cancelled'
export type PaymentStatus = 'pending' | 'escrowed' | 'released' | 'refunded'
export type MessageType = 'text' | 'image' | 'file' | 'voice'
export type CategoryType = 'product' | 'service'
export type SubscriptionPlan = 'gratis' | 'pro' | 'bisnis'
export type VerificationLevel = 1 | 2 | 3 | 4

export interface User {
  id: string
  phone: string
  email?: string
  name: string
  avatar?: string
  bio?: string
  businessName?: string
  businessType: BusinessType
  city?: string
  kecamatan?: string
  latitude?: number
  longitude?: number
  verificationLevel: VerificationLevel
  isSeller: boolean
  isBuyer: boolean
  subscriptionPlan: SubscriptionPlan
  isActive: boolean
  createdAt: string
  lastActive: string
  // Computed
  averageRating?: number
  totalReviews?: number
  repeatClientRate?: number
}

export interface PricingPackage {
  name: string
  price: number
  description: string
  deliverables: string[]
}

export interface Listing {
  id: string
  sellerId: string
  seller?: User
  type: ListingType
  categoryId: string
  category?: Category
  title: string
  description: string
  images: string[]
  videos: string[]
  pricingType: PricingType
  basePrice?: number
  packages?: PricingPackage[]
  minOrderQty?: number
  unit?: string
  stockCount?: number
  deliveryOptions: DeliveryOption
  deliveryArea?: string
  tags: string[]
  isActive: boolean
  isFeatured: boolean
  isBoosted: boolean
  boostExpiresAt?: string
  viewCount: number
  createdAt: string
  updatedAt: string
  // Computed
  averageRating?: number
  totalReviews?: number
}

export interface OrderItem {
  listingId: string
  qty: number
  unitPrice: number
  subtotal: number
}

export interface Milestone {
  title: string
  amount: number
  status: 'pending' | 'in_progress' | 'completed'
  deliverableUrl?: string
}

export interface Order {
  id: string
  buyerId: string
  buyer?: User
  sellerId: string
  seller?: User
  listingId: string
  listing?: Listing
  type: OrderType
  status: OrderStatus
  items: OrderItem[]
  totalAmount: number
  platformFee: number
  sellerPayout: number
  paymentStatus: PaymentStatus
  paymentMethod?: string
  paymentRef?: string
  deliveryAddress?: {
    street: string
    city: string
    kecamatan: string
    postalCode: string
  }
  milestones?: Milestone[]
  notes?: string
  createdAt: string
  updatedAt: string
  completedAt?: string
}

export interface ReviewMetrics {
  quality?: number
  communication?: number
  timeliness?: number
  value?: number
}

export interface Review {
  id: string
  orderId: string
  listingId: string
  reviewerId: string
  reviewer?: User
  revieweeId: string
  reviewee?: User
  rating: number
  text?: string
  photos: string[]
  metrics?: ReviewMetrics
  responseText?: string
  createdAt: string
}

export interface Message {
  id: string
  conversationId: string
  senderId: string
  sender?: User
  type: MessageType
  content: string
  readAt?: string
  createdAt: string
}

export interface Conversation {
  id: string
  listingId?: string
  listing?: Listing
  orderId?: string
  order?: Order
  participants: User[]
  messages?: Message[]
  lastMessage?: Message
  createdAt: string
  updatedAt: string
}

export interface Category {
  id: string
  parentId?: string
  parent?: Category
  children?: Category[]
  nameId: string    // Bahasa Indonesia
  nameEn?: string
  icon?: string
  description?: string
  type: CategoryType
  displayOrder: number
  isActive: boolean
}

// ─────────────────────────────────────────
// API Response Wrappers
// ─────────────────────────────────────────

export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

// ─────────────────────────────────────────
// Search / Filter
// ─────────────────────────────────────────

export interface SearchFilters {
  q?: string
  category?: string
  subcategory?: string
  city?: string
  kecamatan?: string
  minPrice?: number
  maxPrice?: number
  rating?: number
  verified?: boolean
  type?: ListingType
  urgent?: boolean
  page?: number
  pageSize?: number
  sortBy?: 'relevance' | 'rating' | 'price_asc' | 'price_desc' | 'newest'
}
