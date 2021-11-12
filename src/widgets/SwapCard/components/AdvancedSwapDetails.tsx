import React from 'react'
import { Trade, TradeType } from '@pancakeswap/sdk'
import { Text } from '../../../components/Text'
import { useUserSlippageTolerance } from 'state/user/hooks'
import { computeSlippageAdjustedAmounts, computeTradePriceBreakdown } from 'utils/prices'
import { AutoColumn } from '../../../components/Layout/Column'
import QuestionHelper from 'components/QuestionHelper'
import { RowBetween, RowFixed } from '../../../components/Layout/Row'
import FormattedPriceImpact from './FormattedPriceImpact'
import SwapRoute from './SwapRoute'

export enum Field {
  INPUT = 'INPUT',
  OUTPUT = 'OUTPUT',
}

export interface TradeSummaryProps {
  texts: {
    receivedOrSold: string
    slippageAdjusted: string
    transactionHelper: string
    priceImpact: string
    priceDifference: string
    fee: string
    amountFee: string
    amountLP: string
    amountTreasury: string
    amountTowards: string
    realizedLPFeeText: string
  },
  errorText: React.ReactNode
}

function TradeSummary({
  texts,
  errorText
}: TradeSummaryProps) {
  const { 
    receivedOrSold,
    slippageAdjusted,
    transactionHelper,
    priceImpact,
    priceDifference,
    fee,
    amountFee,
    amountLP,
    amountTreasury,
    amountTowards,
    realizedLPFeeText
   } = texts

  return (
    <AutoColumn style={{ padding: '0 16px' }}>
      <RowBetween>
        <RowFixed>
          <Text fontSize="14px" color="textSubtle">
            {receivedOrSold}
          </Text>
          <QuestionHelper
            text={transactionHelper}
            ml="4px"
          />
        </RowFixed>
        <RowFixed>
          <Text fontSize="14px">
            {slippageAdjusted}
          </Text>
        </RowFixed>
      </RowBetween>
      <RowBetween>
        <RowFixed>
          <Text fontSize="14px" color="textSubtle">
            {priceImpact}
          </Text>
          <QuestionHelper
            text={priceDifference}
            ml="4px"
          />
        </RowFixed>
        {errorText}
      </RowBetween>

      <RowBetween>
        <RowFixed>
          <Text fontSize="14px" color="textSubtle">
            {fee}
          </Text>
          <QuestionHelper
            text={
              <>
                <Text mb="12px">{amountFee}</Text>
                <Text>- {amountLP}</Text>
                <Text>- {amountTreasury}</Text>
                <Text>- {amountTowards}</Text>
              </>
            }
            ml="4px"
          />
        </RowFixed>
        <Text fontSize="14px">
          {realizedLPFeeText}
        </Text>
      </RowBetween>
    </AutoColumn>
  )
}

export interface AdvancedSwapDetailsProps {
  trade?: Trade
}

export function AdvancedSwapDetails({ trade }: AdvancedSwapDetailsProps) {
  const { t } = useTranslation()
  const [allowedSlippage] = useUserSlippageTolerance()

  const showRoute = Boolean(trade && trade.route.path.length > 2)

  return (
    <AutoColumn gap="0px">
      {trade && (
        <>
          <TradeSummary trade={trade} allowedSlippage={allowedSlippage} />
          {showRoute && (
            <>
              <RowBetween style={{ padding: '0 16px' }}>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <Text fontSize="14px" color="textSubtle">
                    {t('Route')}
                  </Text>
                  <QuestionHelper
                    text={t('Routing through these tokens resulted in the best price for your trade.')}
                    ml="4px"
                  />
                </span>
                <SwapRoute trade={trade} />
              </RowBetween>
            </>
          )}
        </>
      )}
    </AutoColumn>
  )
}
