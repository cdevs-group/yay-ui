import React, { useState } from 'react'
import { Button } from '../Button'
import { Text } from '../Text'
import { ErrorIcon } from '../Svg'
import { Flex } from '../Box'
import { Message } from '../Message'
import { CheckboxInput } from '../CheckboxInput'
import { Link } from '../Link'
import { Tag } from '../Tag'
import { Grid } from '../Box'
import { AutoColumn } from '../../components/Layout/Column'
import { ListLogo } from '../../components/Logo'

interface ImportProps {
    tokens: any[]
    handleCurrencySelect?: (currency: any) => void
    srcs: string[]
    texts: {
        createToken: string
        purchaseToken: string
        via: string
        unknownSource: string
        viewOnbscScan: string
        understanding: string
        importText: string
    }
    addToken: (token: any) => void
    chainId: number,
    inactiveTokenList: any
    truncateHash: string
    bscScanLink: string
}

function ImportToken({
    tokens,
    handleCurrencySelect,
    srcs,
    texts,
    addToken,
    chainId,
    inactiveTokenList,
    truncateHash,
    bscScanLink
}: ImportProps) {

    const {
        createToken,
        purchaseToken,
        via,
        unknownSource,
        viewOnbscScan,
        understanding,
        importText
    } = texts

    const [confirmed, setConfirmed] = useState(false)

    return (
        <AutoColumn gap="lg">
            <Message variant="warning">
                <Text>
                    {createToken}
                    <br />
                    <br />
                    {purchaseToken}
                </Text>
            </Message>

            {tokens.map((token: any) => {
                const list = chainId && inactiveTokenList?.[chainId]?.[token.address]?.list
                const address = token.address ? `${truncateHash}` : null
                return (
                    <Grid key={token.address} gridTemplateRows="1fr 1fr 1fr" gridGap="4px">
                        {list !== undefined ? (
                            <Tag
                                variant="success"
                                outline
                                scale="sm"
                                startIcon={list.logoURI && <ListLogo srcs={srcs} logoURI={list.logoURI} size="12px" />}
                            >
                                {via} {list.name}
                            </Tag>
                        ) : (
                            <Tag variant="failure" outline scale="sm" startIcon={<ErrorIcon color="failure" />}>
                                {unknownSource}
                            </Tag>
                        )}
                        <Flex alignItems="center">
                            <Text mr="8px">{token.name}</Text>
                            <Text>({token.symbol})</Text>
                        </Flex>
                        {chainId && (
                            <Flex justifyContent="space-between" width="100%">
                                <Text mr="4px">{address}</Text>
                                <Link href={bscScanLink} external>
                                    ({viewOnbscScan})
                                </Link>
                            </Flex>
                        )}
                    </Grid>
                )
            })}

            <Flex justifyContent="space-between" alignItems="center">
                <Flex alignItems="center" onClick={() => setConfirmed(!confirmed)}>
                    <CheckboxInput
                        scale="sm"
                        name="confirmed"
                        type="checkbox"
                        checked={confirmed}
                        onChange={() => setConfirmed(!confirmed)}
                    />
                    <Text ml="8px" style={{ userSelect: 'none' }}>
                        {understanding}
                    </Text>
                </Flex>
                <Button
                    variant="danger"
                    disabled={!confirmed}
                    onClick={() => {
                        tokens.map((token) => addToken(token))
                        if (handleCurrencySelect) {
                            handleCurrencySelect(tokens[0])
                        }
                    }}
                    className=".token-dismiss-button"
                >
                    {importText}
                </Button>
            </Flex>
        </AutoColumn>
    )
}

export default ImportToken