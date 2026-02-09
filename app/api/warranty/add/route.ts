import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      serialNumber,
      productName,
      purchaseDate,
      expiryDate,
      registeredBy,
      customerName,
      companyName,
      mobileNumber,
      address,
      city,
      state,
      zipCode,
      productCategory,
      modelNumber,
      quantity,
      purchaseChannel,
      resellerName,
      proofOfPurchaseUrl
    } = body

    if (!serialNumber || !productName || !purchaseDate || !expiryDate) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const existingWarranty = await prisma.warranty.findUnique({
      where: { serialNumber },
    })

    if (existingWarranty) {
      return NextResponse.json({ error: 'Warranty for this serial number already exists' }, { status: 400 })
    }

    const warranty = await prisma.warranty.create({
      data: {
        serialNumber,
        productName,
        customerName,
        companyName,
        mobileNumber,
        address,
        city,
        state,
        zipCode,
        productCategory,
        modelNumber,
        quantity: quantity ? parseInt(quantity) : 1,
        purchaseDate: new Date(purchaseDate),
        expiryDate: new Date(expiryDate),
        purchaseChannel,
        resellerName,
        proofOfPurchaseUrl,
        registeredBy,
        status: 'ACTIVE',
      },
    })

    return NextResponse.json({ success: true, warranty })

  } catch (error) {
    console.error('Warranty add error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
