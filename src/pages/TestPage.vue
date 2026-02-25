<script setup lang="ts">
const result = computed(() => {
  if (!currency.value) return ruble.value

  if (valuta.value === '1inch' && currency.value.rub?.['1inch']) {
    return ruble.value * currency.value.rub['1inch']
  } else if (valuta.value === 'aave' && currency.value.rub?.aave) {
    return ruble.value * currency.value.rub.aave
  } else if (valuta.value === 'ada' && currency.value.rub?.ada) {
    return ruble.value * currency.value.rub.ada
  } else if (valuta.value === 'aed' && currency.value.rub?.aed) {
    return ruble.value * currency.value.rub.aed
  } else if (valuta.value === 'afn' && currency.value.rub?.afn) {
    return ruble.value * currency.value.rub.afn
  } else if (valuta.value === 'agix' && currency.value.rub?.agix) {
    return ruble.value * currency.value.rub.agix
  } else if (valuta.value === 'akt' && currency.value.rub?.akt) {
    return ruble.value * currency.value.rub.akt
  } else if (valuta.value === 'algo' && currency.value.rub?.algo) {
    return ruble.value * currency.value.rub.algo
  } else if (valuta.value === 'all' && currency.value.rub?.all) {
    return ruble.value * currency.value.rub.all
  } else if (valuta.value === 'amd' && currency.value.rub?.amd) {
    return ruble.value * currency.value.rub.amd
  } else if (valuta.value === 'amp' && currency.value.rub?.amp) {
    return ruble.value * currency.value.rub.amp
  } else if (valuta.value === 'ang' && currency.value.rub?.ang) {
    return ruble.value * currency.value.rub.ang
  } else if (valuta.value === 'aoa' && currency.value.rub?.aoa) {
    return ruble.value * currency.value.rub.aoa
  } else if (valuta.value === 'ape' && currency.value.rub?.ape) {
    return ruble.value * currency.value.rub.ape
  } else if (valuta.value === 'apt' && currency.value.rub?.apt) {
    return ruble.value * currency.value.rub.apt
  } else if (valuta.value === 'ar' && currency.value.rub?.ar) {
    return ruble.value * currency.value.rub.ar
  } else if (valuta.value === 'arb' && currency.value.rub?.arb) {
    return ruble.value * currency.value.rub.arb
  } else if (valuta.value === 'ars' && currency.value.rub?.ars) {
    return ruble.value * currency.value.rub.ars
  } else if (valuta.value === 'atom' && currency.value.rub?.atom) {
    return ruble.value * currency.value.rub.atom
  } else if (valuta.value === 'ats' && currency.value.rub?.ats) {
    return ruble.value * currency.value.rub.ats
  } else if (valuta.value === 'aud' && currency.value.rub?.aud) {
    return ruble.value * currency.value.rub.aud
  } else if (valuta.value === 'avax' && currency.value.rub?.avax) {
    return ruble.value * currency.value.rub.avax
  } else if (valuta.value === 'awg' && currency.value.rub?.awg) {
    return ruble.value * currency.value.rub.awg
  } else if (valuta.value === 'axs' && currency.value.rub?.axs) {
    return ruble.value * currency.value.rub.axs
  } else if (valuta.value === 'azm' && currency.value.rub?.azm) {
    return ruble.value * currency.value.rub.azm
  } else if (valuta.value === 'azn' && currency.value.rub?.azn) {
    return ruble.value * currency.value.rub.azn
  } else if (valuta.value === 'bake' && currency.value.rub?.bake) {
    return ruble.value * currency.value.rub.bake
  } else if (valuta.value === 'bam' && currency.value.rub?.bam) {
    return ruble.value * currency.value.rub.bam
  } else if (valuta.value === 'bat' && currency.value.rub?.bat) {
    return ruble.value * currency.value.rub.bat
  } else if (valuta.value === 'bbd' && currency.value.rub?.bbd) {
    return ruble.value * currency.value.rub.bbd
  } else if (valuta.value === 'bch' && currency.value.rub?.bch) {
    return ruble.value * currency.value.rub.bch
  } else if (valuta.value === 'bdt' && currency.value.rub?.bdt) {
    return ruble.value * currency.value.rub.bdt
  } else if (valuta.value === 'bef' && currency.value.rub?.bef) {
    return ruble.value * currency.value.rub.bef
  } else if (valuta.value === 'bgn' && currency.value.rub?.bgn) {
    return ruble.value * currency.value.rub.bgn
  } else if (valuta.value === 'bhd' && currency.value.rub?.bhd) {
    return ruble.value * currency.value.rub.bhd
  } else if (valuta.value === 'bif' && currency.value.rub?.bif) {
    return ruble.value * currency.value.rub.bif
  } else if (valuta.value === 'bmd' && currency.value.rub?.bmd) {
    return ruble.value * currency.value.rub.bmd
  } else if (valuta.value === 'bnb' && currency.value.rub?.bnb) {
    return ruble.value * currency.value.rub.bnb
  } else if (valuta.value === 'bnd' && currency.value.rub?.bnd) {
    return ruble.value * currency.value.rub.bnd
  } else if (valuta.value === 'bob' && currency.value.rub?.bob) {
    return ruble.value * currency.value.rub.bob
  } else if (valuta.value === 'brl' && currency.value.rub?.brl) {
    return ruble.value * currency.value.rub.brl
  } else if (valuta.value === 'bsd' && currency.value.rub?.bsd) {
    return ruble.value * currency.value.rub.bsd
  } else if (valuta.value === 'bsv' && currency.value.rub?.bsv) {
    return ruble.value * currency.value.rub.bsv
  } else if (valuta.value === 'bsw' && currency.value.rub?.bsw) {
    return ruble.value * currency.value.rub.bsw
  } else if (valuta.value === 'btc' && currency.value.rub?.btc) {
    return ruble.value * currency.value.rub.btc
  } else if (valuta.value === 'btcb' && currency.value.rub?.btcb) {
    return ruble.value * currency.value.rub.btcb
  } else if (valuta.value === 'btg' && currency.value.rub?.btg) {
    return ruble.value * currency.value.rub.btg
  } else if (valuta.value === 'btn' && currency.value.rub?.btn) {
    return ruble.value * currency.value.rub.btn
  } else if (valuta.value === 'btt' && currency.value.rub?.btt) {
    return ruble.value * currency.value.rub.btt
  } else if (valuta.value === 'busd' && currency.value.rub?.busd) {
    return ruble.value * currency.value.rub.busd
  } else if (valuta.value === 'bwp' && currency.value.rub?.bwp) {
    return ruble.value * currency.value.rub.bwp
  } else if (valuta.value === 'byn' && currency.value.rub?.byn) {
    return ruble.value * currency.value.rub.byn
  } else if (valuta.value === 'byr' && currency.value.rub?.byr) {
    return ruble.value * currency.value.rub.byr
  } else if (valuta.value === 'bzd' && currency.value.rub?.bzd) {
    return ruble.value * currency.value.rub.bzd
  } else if (valuta.value === 'cad' && currency.value.rub?.cad) {
    return ruble.value * currency.value.rub.cad
  } else if (valuta.value === 'cake' && currency.value.rub?.cake) {
    return ruble.value * currency.value.rub.cake
  } else if (valuta.value === 'cdf' && currency.value.rub?.cdf) {
    return ruble.value * currency.value.rub.cdf
  } else if (valuta.value === 'celo' && currency.value.rub?.celo) {
    return ruble.value * currency.value.rub.celo
  } else if (valuta.value === 'cfx' && currency.value.rub?.cfx) {
    return ruble.value * currency.value.rub.cfx
  } else if (valuta.value === 'chf' && currency.value.rub?.chf) {
    return ruble.value * currency.value.rub.chf
  } else if (valuta.value === 'chz' && currency.value.rub?.chz) {
    return ruble.value * currency.value.rub.chz
  } else if (valuta.value === 'clp' && currency.value.rub?.clp) {
    return ruble.value * currency.value.rub.clp
  } else if (valuta.value === 'cnh' && currency.value.rub?.cnh) {
    return ruble.value * currency.value.rub.cnh
  } else if (valuta.value === 'cny' && currency.value.rub?.cny) {
    return ruble.value * currency.value.rub.cny
  } else if (valuta.value === 'comp' && currency.value.rub?.comp) {
    return ruble.value * currency.value.rub.comp
  } else if (valuta.value === 'cop' && currency.value.rub?.cop) {
    return ruble.value * currency.value.rub.cop
  } else if (valuta.value === 'crc' && currency.value.rub?.crc) {
    return ruble.value * currency.value.rub.crc
  } else if (valuta.value === 'cro' && currency.value.rub?.cro) {
    return ruble.value * currency.value.rub.cro
  } else if (valuta.value === 'crv' && currency.value.rub?.crv) {
    return ruble.value * currency.value.rub.crv
  } else if (valuta.value === 'cspr' && currency.value.rub?.cspr) {
    return ruble.value * currency.value.rub.cspr
  } else if (valuta.value === 'cuc' && currency.value.rub?.cuc) {
    return ruble.value * currency.value.rub.cuc
  } else if (valuta.value === 'cup' && currency.value.rub?.cup) {
    return ruble.value * currency.value.rub.cup
  } else if (valuta.value === 'cve' && currency.value.rub?.cve) {
    return ruble.value * currency.value.rub.cve
  } else if (valuta.value === 'cvx' && currency.value.rub?.cvx) {
    return ruble.value * currency.value.rub.cvx
  } else if (valuta.value === 'cyp' && currency.value.rub?.cyp) {
    return ruble.value * currency.value.rub.cyp
  } else if (valuta.value === 'czk' && currency.value.rub?.czk) {
    return ruble.value * currency.value.rub.czk
  } else if (valuta.value === 'dai' && currency.value.rub?.dai) {
    return ruble.value * currency.value.rub.dai
  } else if (valuta.value === 'dash' && currency.value.rub?.dash) {
    return ruble.value * currency.value.rub.dash
  } else if (valuta.value === 'dcr' && currency.value.rub?.dcr) {
    return ruble.value * currency.value.rub.dcr
  } else if (valuta.value === 'dem' && currency.value.rub?.dem) {
    return ruble.value * currency.value.rub.dem
  } else if (valuta.value === 'dfi' && currency.value.rub?.dfi) {
    return ruble.value * currency.value.rub.dfi
  } else if (valuta.value === 'djf' && currency.value.rub?.djf) {
    return ruble.value * currency.value.rub.djf
  } else if (valuta.value === 'dkk' && currency.value.rub?.dkk) {
    return ruble.value * currency.value.rub.dkk
  } else if (valuta.value === 'doge' && currency.value.rub?.doge) {
    return ruble.value * currency.value.rub.doge
  } else if (valuta.value === 'dop' && currency.value.rub?.dop) {
    return ruble.value * currency.value.rub.dop
  } else if (valuta.value === 'dot' && currency.value.rub?.dot) {
    return ruble.value * currency.value.rub.dot
  } else if (valuta.value === 'dydx' && currency.value.rub?.dydx) {
    return ruble.value * currency.value.rub.dydx
  } else if (valuta.value === 'dzd' && currency.value.rub?.dzd) {
    return ruble.value * currency.value.rub.dzd
  } else if (valuta.value === 'eek' && currency.value.rub?.eek) {
    return ruble.value * currency.value.rub.eek
  } else if (valuta.value === 'egld' && currency.value.rub?.egld) {
    return ruble.value * currency.value.rub.egld
  } else if (valuta.value === 'egp' && currency.value.rub?.egp) {
    return ruble.value * currency.value.rub.egp
  } else if (valuta.value === 'enj' && currency.value.rub?.enj) {
    return ruble.value * currency.value.rub.enj
  } else if (valuta.value === 'eos' && currency.value.rub?.eos) {
    return ruble.value * currency.value.rub.eos
  } else if (valuta.value === 'ern' && currency.value.rub?.ern) {
    return ruble.value * currency.value.rub.ern
  } else if (valuta.value === 'esp' && currency.value.rub?.esp) {
    return ruble.value * currency.value.rub.esp
  } else if (valuta.value === 'etb' && currency.value.rub?.etb) {
    return ruble.value * currency.value.rub.etb
  } else if (valuta.value === 'etc' && currency.value.rub?.etc) {
    return ruble.value * currency.value.rub.etc
  } else if (valuta.value === 'eth' && currency.value.rub?.eth) {
    return ruble.value * currency.value.rub.eth
  } else if (valuta.value === 'eur' && currency.value.rub?.eur) {
    return ruble.value * currency.value.rub.eur
  } else if (valuta.value === 'eurc' && currency.value.rub?.eurc) {
    return ruble.value * currency.value.rub.eurc
  } else if (valuta.value === 'fei' && currency.value.rub?.fei) {
    return ruble.value * currency.value.rub.fei
  } else if (valuta.value === 'fil' && currency.value.rub?.fil) {
    return ruble.value * currency.value.rub.fil
  } else if (valuta.value === 'fim' && currency.value.rub?.fim) {
    return ruble.value * currency.value.rub.fim
  } else if (valuta.value === 'fjd' && currency.value.rub?.fjd) {
    return ruble.value * currency.value.rub.fjd
  } else if (valuta.value === 'fkp' && currency.value.rub?.fkp) {
    return ruble.value * currency.value.rub.fkp
  } else if (valuta.value === 'flow' && currency.value.rub?.flow) {
    return ruble.value * currency.value.rub.flow
  } else if (valuta.value === 'flr' && currency.value.rub?.flr) {
    return ruble.value * currency.value.rub.flr
  } else if (valuta.value === 'frax' && currency.value.rub?.frax) {
    return ruble.value * currency.value.rub.frax
  } else if (valuta.value === 'frf' && currency.value.rub?.frf) {
    return ruble.value * currency.value.rub.frf
  } else if (valuta.value === 'ftt' && currency.value.rub?.ftt) {
    return ruble.value * currency.value.rub.ftt
  } else if (valuta.value === 'gala' && currency.value.rub?.gala) {
    return ruble.value * currency.value.rub.gala
  } else if (valuta.value === 'gbp' && currency.value.rub?.gbp) {
    return ruble.value * currency.value.rub.gbp
  } else if (valuta.value === 'gel' && currency.value.rub?.gel) {
    return ruble.value * currency.value.rub.gel
  } else if (valuta.value === 'ggp' && currency.value.rub?.ggp) {
    return ruble.value * currency.value.rub.ggp
  } else if (valuta.value === 'ghc' && currency.value.rub?.ghc) {
    return ruble.value * currency.value.rub.ghc
  } else if (valuta.value === 'ghs' && currency.value.rub?.ghs) {
    return ruble.value * currency.value.rub.ghs
  } else if (valuta.value === 'gip' && currency.value.rub?.gip) {
    return ruble.value * currency.value.rub.gip
  } else if (valuta.value === 'gmd' && currency.value.rub?.gmd) {
    return ruble.value * currency.value.rub.gmd
  } else if (valuta.value === 'gmx' && currency.value.rub?.gmx) {
    return ruble.value * currency.value.rub.gmx
  } else if (valuta.value === 'gnf' && currency.value.rub?.gnf) {
    return ruble.value * currency.value.rub.gnf
  } else if (valuta.value === 'gno' && currency.value.rub?.gno) {
    return ruble.value * currency.value.rub.gno
  } else if (valuta.value === 'grd' && currency.value.rub?.grd) {
    return ruble.value * currency.value.rub.grd
  } else if (valuta.value === 'grt' && currency.value.rub?.grt) {
    return ruble.value * currency.value.rub.grt
  } else if (valuta.value === 'gt' && currency.value.rub?.gt) {
    return ruble.value * currency.value.rub.gt
  } else if (valuta.value === 'gtq' && currency.value.rub?.gtq) {
    return ruble.value * currency.value.rub.gtq
  } else if (valuta.value === 'gusd' && currency.value.rub?.gusd) {
    return ruble.value * currency.value.rub.gusd
  } else if (valuta.value === 'gyd' && currency.value.rub?.gyd) {
    return ruble.value * currency.value.rub.gyd
  } else if (valuta.value === 'hbar' && currency.value.rub?.hbar) {
    return ruble.value * currency.value.rub.hbar
  } else if (valuta.value === 'hkd' && currency.value.rub?.hkd) {
    return ruble.value * currency.value.rub.hkd
  } else if (valuta.value === 'hnl' && currency.value.rub?.hnl) {
    return ruble.value * currency.value.rub.hnl
  } else if (valuta.value === 'hnt' && currency.value.rub?.hnt) {
    return ruble.value * currency.value.rub.hnt
  } else if (valuta.value === 'hot' && currency.value.rub?.hot) {
    return ruble.value * currency.value.rub.hot
  } else if (valuta.value === 'hrk' && currency.value.rub?.hrk) {
    return ruble.value * currency.value.rub.hrk
  } else if (valuta.value === 'ht' && currency.value.rub?.ht) {
    return ruble.value * currency.value.rub.ht
  } else if (valuta.value === 'htg' && currency.value.rub?.htg) {
    return ruble.value * currency.value.rub.htg
  } else if (valuta.value === 'huf' && currency.value.rub?.huf) {
    return ruble.value * currency.value.rub.huf
  } else if (valuta.value === 'icp' && currency.value.rub?.icp) {
    return ruble.value * currency.value.rub.icp
  } else if (valuta.value === 'idr' && currency.value.rub?.idr) {
    return ruble.value * currency.value.rub.idr
  } else if (valuta.value === 'iep' && currency.value.rub?.iep) {
    return ruble.value * currency.value.rub.iep
  } else if (valuta.value === 'ils' && currency.value.rub?.ils) {
    return ruble.value * currency.value.rub.ils
  } else if (valuta.value === 'imp' && currency.value.rub?.imp) {
    return ruble.value * currency.value.rub.imp
  } else if (valuta.value === 'imx' && currency.value.rub?.imx) {
    return ruble.value * currency.value.rub.imx
  } else if (valuta.value === 'inj' && currency.value.rub?.inj) {
    return ruble.value * currency.value.rub.inj
  } else if (valuta.value === 'inr' && currency.value.rub?.inr) {
    return ruble.value * currency.value.rub.inr
  } else if (valuta.value === 'iqd' && currency.value.rub?.iqd) {
    return ruble.value * currency.value.rub.iqd
  } else if (valuta.value === 'irr' && currency.value.rub?.irr) {
    return ruble.value * currency.value.rub.irr
  } else if (valuta.value === 'isk' && currency.value.rub?.isk) {
    return ruble.value * currency.value.rub.isk
  } else if (valuta.value === 'itl' && currency.value.rub?.itl) {
    return ruble.value * currency.value.rub.itl
  } else if (valuta.value === 'jep' && currency.value.rub?.jep) {
    return ruble.value * currency.value.rub.jep
  } else if (valuta.value === 'jmd' && currency.value.rub?.jmd) {
    return ruble.value * currency.value.rub.jmd
  } else if (valuta.value === 'jod' && currency.value.rub?.jod) {
    return ruble.value * currency.value.rub.jod
  } else if (valuta.value === 'jpy' && currency.value.rub?.jpy) {
    return ruble.value * currency.value.rub.jpy
  } else if (valuta.value === 'kas' && currency.value.rub?.kas) {
    return ruble.value * currency.value.rub.kas
  } else if (valuta.value === 'kava' && currency.value.rub?.kava) {
    return ruble.value * currency.value.rub.kava
  } else if (valuta.value === 'kcs' && currency.value.rub?.kcs) {
    return ruble.value * currency.value.rub.kcs
  } else if (valuta.value === 'kda' && currency.value.rub?.kda) {
    return ruble.value * currency.value.rub.kda
  } else if (valuta.value === 'kes' && currency.value.rub?.kes) {
    return ruble.value * currency.value.rub.kes
  } else if (valuta.value === 'kgs' && currency.value.rub?.kgs) {
    return ruble.value * currency.value.rub.kgs
  } else if (valuta.value === 'khr' && currency.value.rub?.khr) {
    return ruble.value * currency.value.rub.khr
  } else if (valuta.value === 'klay' && currency.value.rub?.klay) {
    return ruble.value * currency.value.rub.klay
  } else if (valuta.value === 'kmf' && currency.value.rub?.kmf) {
    return ruble.value * currency.value.rub.kmf
  } else if (valuta.value === 'knc' && currency.value.rub?.knc) {
    return ruble.value * currency.value.rub.knc
  } else if (valuta.value === 'kpw' && currency.value.rub?.kpw) {
    return ruble.value * currency.value.rub.kpw
  } else if (valuta.value === 'krw' && currency.value.rub?.krw) {
    return ruble.value * currency.value.rub.krw
  } else if (valuta.value === 'ksm' && currency.value.rub?.ksm) {
    return ruble.value * currency.value.rub.ksm
  } else if (valuta.value === 'kwd' && currency.value.rub?.kwd) {
    return ruble.value * currency.value.rub.kwd
  } else if (valuta.value === 'kyd' && currency.value.rub?.kyd) {
    return ruble.value * currency.value.rub.kyd
  } else if (valuta.value === 'kzt' && currency.value.rub?.kzt) {
    return ruble.value * currency.value.rub.kzt
  } else if (valuta.value === 'lak' && currency.value.rub?.lak) {
    return ruble.value * currency.value.rub.lak
  } else if (valuta.value === 'lbp' && currency.value.rub?.lbp) {
    return ruble.value * currency.value.rub.lbp
  } else if (valuta.value === 'ldo' && currency.value.rub?.ldo) {
    return ruble.value * currency.value.rub.ldo
  } else if (valuta.value === 'leo' && currency.value.rub?.leo) {
    return ruble.value * currency.value.rub.leo
  } else if (valuta.value === 'link' && currency.value.rub?.link) {
    return ruble.value * currency.value.rub.link
  } else if (valuta.value === 'lkr' && currency.value.rub?.lkr) {
    return ruble.value * currency.value.rub.lkr
  } else if (valuta.value === 'lrc' && currency.value.rub?.lrc) {
    return ruble.value * currency.value.rub.lrc
  } else if (valuta.value === 'lrd' && currency.value.rub?.lrd) {
    return ruble.value * currency.value.rub.lrd
  } else if (valuta.value === 'lsl' && currency.value.rub?.lsl) {
    return ruble.value * currency.value.rub.lsl
  } else if (valuta.value === 'ltc' && currency.value.rub?.ltc) {
    return ruble.value * currency.value.rub.ltc
  } else if (valuta.value === 'ltl' && currency.value.rub?.ltl) {
    return ruble.value * currency.value.rub.ltl
  } else if (valuta.value === 'luf' && currency.value.rub?.luf) {
    return ruble.value * currency.value.rub.luf
  } else if (valuta.value === 'luna' && currency.value.rub?.luna) {
    return ruble.value * currency.value.rub.luna
  } else if (valuta.value === 'lunc' && currency.value.rub?.lunc) {
    return ruble.value * currency.value.rub.lunc
  } else if (valuta.value === 'lvl' && currency.value.rub?.lvl) {
    return ruble.value * currency.value.rub.lvl
  } else if (valuta.value === 'lyd' && currency.value.rub?.lyd) {
    return ruble.value * currency.value.rub.lyd
  } else if (valuta.value === 'mad' && currency.value.rub?.mad) {
    return ruble.value * currency.value.rub.mad
  } else if (valuta.value === 'mana' && currency.value.rub?.mana) {
    return ruble.value * currency.value.rub.mana
  } else if (valuta.value === 'mbx' && currency.value.rub?.mbx) {
    return ruble.value * currency.value.rub.mbx
  } else if (valuta.value === 'mdl' && currency.value.rub?.mdl) {
    return ruble.value * currency.value.rub.mdl
  } else if (valuta.value === 'mga' && currency.value.rub?.mga) {
    return ruble.value * currency.value.rub.mga
  } else if (valuta.value === 'mgf' && currency.value.rub?.mgf) {
    return ruble.value * currency.value.rub.mgf
  } else if (valuta.value === 'mina' && currency.value.rub?.mina) {
    return ruble.value * currency.value.rub.mina
  } else if (valuta.value === 'mkd' && currency.value.rub?.mkd) {
    return ruble.value * currency.value.rub.mkd
  } else if (valuta.value === 'mkr' && currency.value.rub?.mkr) {
    return ruble.value * currency.value.rub.mkr
  } else if (valuta.value === 'mmk' && currency.value.rub?.mmk) {
    return ruble.value * currency.value.rub.mmk
  } else if (valuta.value === 'mnt' && currency.value.rub?.mnt) {
    return ruble.value * currency.value.rub.mnt
  } else if (valuta.value === 'mop' && currency.value.rub?.mop) {
    return ruble.value * currency.value.rub.mop
  } else if (valuta.value === 'mro' && currency.value.rub?.mro) {
    return ruble.value * currency.value.rub.mro
  } else if (valuta.value === 'mru' && currency.value.rub?.mru) {
    return ruble.value * currency.value.rub.mru
  } else if (valuta.value === 'mtl' && currency.value.rub?.mtl) {
    return ruble.value * currency.value.rub.mtl
  } else if (valuta.value === 'mur' && currency.value.rub?.mur) {
    return ruble.value * currency.value.rub.mur
  } else if (valuta.value === 'mvr' && currency.value.rub?.mvr) {
    return ruble.value * currency.value.rub.mvr
  } else if (valuta.value === 'mwk' && currency.value.rub?.mwk) {
    return ruble.value * currency.value.rub.mwk
  } else if (valuta.value === 'mxn' && currency.value.rub?.mxn) {
    return ruble.value * currency.value.rub.mxn
  } else if (valuta.value === 'mxv' && currency.value.rub?.mxv) {
    return ruble.value * currency.value.rub.mxv
  } else if (valuta.value === 'myr' && currency.value.rub?.myr) {
    return ruble.value * currency.value.rub.myr
  } else if (valuta.value === 'mzm' && currency.value.rub?.mzm) {
    return ruble.value * currency.value.rub.mzm
  } else if (valuta.value === 'mzn' && currency.value.rub?.mzn) {
    return ruble.value * currency.value.rub.mzn
  } else if (valuta.value === 'nad' && currency.value.rub?.nad) {
    return ruble.value * currency.value.rub.nad
  } else if (valuta.value === 'near' && currency.value.rub?.near) {
    return ruble.value * currency.value.rub.near
  } else if (valuta.value === 'neo' && currency.value.rub?.neo) {
    return ruble.value * currency.value.rub.neo
  } else if (valuta.value === 'nexo' && currency.value.rub?.nexo) {
    return ruble.value * currency.value.rub.nexo
  } else if (valuta.value === 'nft' && currency.value.rub?.nft) {
    return ruble.value * currency.value.rub.nft
  } else if (valuta.value === 'ngn' && currency.value.rub?.ngn) {
    return ruble.value * currency.value.rub.ngn
  } else if (valuta.value === 'nio' && currency.value.rub?.nio) {
    return ruble.value * currency.value.rub.nio
  } else if (valuta.value === 'nlg' && currency.value.rub?.nlg) {
    return ruble.value * currency.value.rub.nlg
  } else if (valuta.value === 'nok' && currency.value.rub?.nok) {
    return ruble.value * currency.value.rub.nok
  } else if (valuta.value === 'npr' && currency.value.rub?.npr) {
    return ruble.value * currency.value.rub.npr
  } else if (valuta.value === 'nzd' && currency.value.rub?.nzd) {
    return ruble.value * currency.value.rub.nzd
  } else if (valuta.value === 'okb' && currency.value.rub?.okb) {
    return ruble.value * currency.value.rub.okb
  } else if (valuta.value === 'omr' && currency.value.rub?.omr) {
    return ruble.value * currency.value.rub.omr
  } else if (valuta.value === 'one' && currency.value.rub?.one) {
    return ruble.value * currency.value.rub.one
  } else if (valuta.value === 'op' && currency.value.rub?.op) {
    return ruble.value * currency.value.rub.op
  } else if (valuta.value === 'ordi' && currency.value.rub?.ordi) {
    return ruble.value * currency.value.rub.ordi
  } else if (valuta.value === 'pab' && currency.value.rub?.pab) {
    return ruble.value * currency.value.rub.pab
  } else if (valuta.value === 'paxg' && currency.value.rub?.paxg) {
    return ruble.value * currency.value.rub.paxg
  } else if (valuta.value === 'pen' && currency.value.rub?.pen) {
    return ruble.value * currency.value.rub.pen
  } else if (valuta.value === 'pepe' && currency.value.rub?.pepe) {
    return ruble.value * currency.value.rub.pepe
  } else if (valuta.value === 'pgk' && currency.value.rub?.pgk) {
    return ruble.value * currency.value.rub.pgk
  } else if (valuta.value === 'php' && currency.value.rub?.php) {
    return ruble.value * currency.value.rub.php
  } else if (valuta.value === 'pi' && currency.value.rub?.pi) {
    return ruble.value * currency.value.rub.pi
  } else if (valuta.value === 'pkr' && currency.value.rub?.pkr) {
    return ruble.value * currency.value.rub.pkr
  } else if (valuta.value === 'pln' && currency.value.rub?.pln) {
    return ruble.value * currency.value.rub.pln
  } else if (valuta.value === 'pol' && currency.value.rub?.pol) {
    return ruble.value * currency.value.rub.pol
  } else if (valuta.value === 'pte' && currency.value.rub?.pte) {
    return ruble.value * currency.value.rub.pte
  } else if (valuta.value === 'pyg' && currency.value.rub?.pyg) {
    return ruble.value * currency.value.rub.pyg
  } else if (valuta.value === 'qar' && currency.value.rub?.qar) {
    return ruble.value * currency.value.rub.qar
  } else if (valuta.value === 'qnt' && currency.value.rub?.qnt) {
    return ruble.value * currency.value.rub.qnt
  } else if (valuta.value === 'qtum' && currency.value.rub?.qtum) {
    return ruble.value * currency.value.rub.qtum
  } else if (valuta.value === 'rol' && currency.value.rub?.rol) {
    return ruble.value * currency.value.rub.rol
  } else if (valuta.value === 'ron' && currency.value.rub?.ron) {
    return ruble.value * currency.value.rub.ron
  } else if (valuta.value === 'rpl' && currency.value.rub?.rpl) {
    return ruble.value * currency.value.rub.rpl
  } else if (valuta.value === 'rsd' && currency.value.rub?.rsd) {
    return ruble.value * currency.value.rub.rsd
  } else if (valuta.value === 'rub' && currency.value.rub?.rub) {
    return ruble.value * currency.value.rub.rub
  } else if (valuta.value === 'rune' && currency.value.rub?.rune) {
    return ruble.value * currency.value.rub.rune
  } else if (valuta.value === 'rvn' && currency.value.rub?.rvn) {
    return ruble.value * currency.value.rub.rvn
  } else if (valuta.value === 'rwf' && currency.value.rub?.rwf) {
    return ruble.value * currency.value.rub.rwf
  } else if (valuta.value === 'sand' && currency.value.rub?.sand) {
    return ruble.value * currency.value.rub.sand
  } else if (valuta.value === 'sar' && currency.value.rub?.sar) {
    return ruble.value * currency.value.rub.sar
  } else if (valuta.value === 'sbd' && currency.value.rub?.sbd) {
    return ruble.value * currency.value.rub.sbd
  } else if (valuta.value === 'scr' && currency.value.rub?.scr) {
    return ruble.value * currency.value.rub.scr
  } else if (valuta.value === 'sdd' && currency.value.rub?.sdd) {
    return ruble.value * currency.value.rub.sdd
  } else if (valuta.value === 'sdg' && currency.value.rub?.sdg) {
    return ruble.value * currency.value.rub.sdg
  } else if (valuta.value === 'sek' && currency.value.rub?.sek) {
    return ruble.value * currency.value.rub.sek
  } else if (valuta.value === 'sgd' && currency.value.rub?.sgd) {
    return ruble.value * currency.value.rub.sgd
  } else if (valuta.value === 'shib' && currency.value.rub?.shib) {
    return ruble.value * currency.value.rub.shib
  } else if (valuta.value === 'shp' && currency.value.rub?.shp) {
    return ruble.value * currency.value.rub.shp
  } else if (valuta.value === 'sit' && currency.value.rub?.sit) {
    return ruble.value * currency.value.rub.sit
  } else if (valuta.value === 'skk' && currency.value.rub?.skk) {
    return ruble.value * currency.value.rub.skk
  } else if (valuta.value === 'sle' && currency.value.rub?.sle) {
    return ruble.value * currency.value.rub.sle
  } else if (valuta.value === 'sll' && currency.value.rub?.sll) {
    return ruble.value * currency.value.rub.sll
  } else if (valuta.value === 'snx' && currency.value.rub?.snx) {
    return ruble.value * currency.value.rub.snx
  } else if (valuta.value === 'sol' && currency.value.rub?.sol) {
    return ruble.value * currency.value.rub.sol
  } else if (valuta.value === 'sos' && currency.value.rub?.sos) {
    return ruble.value * currency.value.rub.sos
  } else if (valuta.value === 'spl' && currency.value.rub?.spl) {
    return ruble.value * currency.value.rub.spl
  } else if (valuta.value === 'srd' && currency.value.rub?.srd) {
    return ruble.value * currency.value.rub.srd
  } else if (valuta.value === 'srg' && currency.value.rub?.srg) {
    return ruble.value * currency.value.rub.srg
  } else if (valuta.value === 'ssp' && currency.value.rub?.ssp) {
    return ruble.value * currency.value.rub.ssp
  } else if (valuta.value === 'std' && currency.value.rub?.std) {
    return ruble.value * currency.value.rub.std
  } else if (valuta.value === 'stn' && currency.value.rub?.stn) {
    return ruble.value * currency.value.rub.stn
  } else if (valuta.value === 'stx' && currency.value.rub?.stx) {
    return ruble.value * currency.value.rub.stx
  } else if (valuta.value === 'sui' && currency.value.rub?.sui) {
    return ruble.value * currency.value.rub.sui
  } else if (valuta.value === 'svc' && currency.value.rub?.svc) {
    return ruble.value * currency.value.rub.svc
  } else if (valuta.value === 'syp' && currency.value.rub?.syp) {
    return ruble.value * currency.value.rub.syp
  } else if (valuta.value === 'szl' && currency.value.rub?.szl) {
    return ruble.value * currency.value.rub.szl
  } else if (valuta.value === 'thb' && currency.value.rub?.thb) {
    return ruble.value * currency.value.rub.thb
  } else if (valuta.value === 'theta' && currency.value.rub?.theta) {
    return ruble.value * currency.value.rub.theta
  } else if (valuta.value === 'tjs' && currency.value.rub?.tjs) {
    return ruble.value * currency.value.rub.tjs
  } else if (valuta.value === 'tmm' && currency.value.rub?.tmm) {
    return ruble.value * currency.value.rub.tmm
  } else if (valuta.value === 'tmt' && currency.value.rub?.tmt) {
    return ruble.value * currency.value.rub.tmt
  } else if (valuta.value === 'tnd' && currency.value.rub?.tnd) {
    return ruble.value * currency.value.rub.tnd
  } else if (valuta.value === 'ton' && currency.value.rub?.ton) {
    return ruble.value * currency.value.rub.ton
  } else if (valuta.value === 'top' && currency.value.rub?.top) {
    return ruble.value * currency.value.rub.top
  } else if (valuta.value === 'trl' && currency.value.rub?.trl) {
    return ruble.value * currency.value.rub.trl
  } else if (valuta.value === 'trx' && currency.value.rub?.trx) {
    return ruble.value * currency.value.rub.trx
  } else if (valuta.value === 'try' && currency.value.rub?.try) {
    return ruble.value * currency.value.rub.try
  } else if (valuta.value === 'ttd' && currency.value.rub?.ttd) {
    return ruble.value * currency.value.rub.ttd
  } else if (valuta.value === 'tusd' && currency.value.rub?.tusd) {
    return ruble.value * currency.value.rub.tusd
  } else if (valuta.value === 'tvd' && currency.value.rub?.tvd) {
    return ruble.value * currency.value.rub.tvd
  } else if (valuta.value === 'twd' && currency.value.rub?.twd) {
    return ruble.value * currency.value.rub.twd
  } else if (valuta.value === 'twt' && currency.value.rub?.twt) {
    return ruble.value * currency.value.rub.twt
  } else if (valuta.value === 'tzs' && currency.value.rub?.tzs) {
    return ruble.value * currency.value.rub.tzs
  } else if (valuta.value === 'uah' && currency.value.rub?.uah) {
    return ruble.value * currency.value.rub.uah
  } else if (valuta.value === 'ugx' && currency.value.rub?.ugx) {
    return ruble.value * currency.value.rub.ugx
  } else if (valuta.value === 'uni' && currency.value.rub?.uni) {
    return ruble.value * currency.value.rub.uni
  } else if (valuta.value === 'usd' && currency.value.rub?.usd) {
    return ruble.value * currency.value.rub.usd
  } else if (valuta.value === 'usdc' && currency.value.rub?.usdc) {
    return ruble.value * currency.value.rub.usdc
  } else if (valuta.value === 'usdd' && currency.value.rub?.usdd) {
    return ruble.value * currency.value.rub.usdd
  } else if (valuta.value === 'usdp' && currency.value.rub?.usdp) {
    return ruble.value * currency.value.rub.usdp
  } else if (valuta.value === 'usdt' && currency.value.rub?.usdt) {
    return ruble.value * currency.value.rub.usdt
  } else if (valuta.value === 'uyu' && currency.value.rub?.uyu) {
    return ruble.value * currency.value.rub.uyu
  } else if (valuta.value === 'uzs' && currency.value.rub?.uzs) {
    return ruble.value * currency.value.rub.uzs
  } else if (valuta.value === 'val' && currency.value.rub?.val) {
    return ruble.value * currency.value.rub.val
  } else if (valuta.value === 'veb' && currency.value.rub?.veb) {
    return ruble.value * currency.value.rub.veb
  } else if (valuta.value === 'ved' && currency.value.rub?.ved) {
    return ruble.value * currency.value.rub.ved
  } else if (valuta.value === 'vef' && currency.value.rub?.vef) {
    return ruble.value * currency.value.rub.vef
  } else if (valuta.value === 'ves' && currency.value.rub?.ves) {
    return ruble.value * currency.value.rub.ves
  } else if (valuta.value === 'vet' && currency.value.rub?.vet) {
    return ruble.value * currency.value.rub.vet
  } else if (valuta.value === 'vnd' && currency.value.rub?.vnd) {
    return ruble.value * currency.value.rub.vnd
  } else if (valuta.value === 'vuv' && currency.value.rub?.vuv) {
    return ruble.value * currency.value.rub.vuv
  } else if (valuta.value === 'waves' && currency.value.rub?.waves) {
    return ruble.value * currency.value.rub.waves
  } else if (valuta.value === 'wemix' && currency.value.rub?.wemix) {
    return ruble.value * currency.value.rub.wemix
  } else if (valuta.value === 'woo' && currency.value.rub?.woo) {
    return ruble.value * currency.value.rub.woo
  } else if (valuta.value === 'wst' && currency.value.rub?.wst) {
    return ruble.value * currency.value.rub.wst
  } else if (valuta.value === 'xaf' && currency.value.rub?.xaf) {
    return ruble.value * currency.value.rub.xaf
  } else if (valuta.value === 'xag' && currency.value.rub?.xag) {
    return ruble.value * currency.value.rub.xag
  } else if (valuta.value === 'xau' && currency.value.rub?.xau) {
    return ruble.value * currency.value.rub.xau
  } else if (valuta.value === 'xaut' && currency.value.rub?.xaut) {
    return ruble.value * currency.value.rub.xaut
  } else if (valuta.value === 'xbt' && currency.value.rub?.xbt) {
    return ruble.value * currency.value.rub.xbt
  } else if (valuta.value === 'xcd' && currency.value.rub?.xcd) {
    return ruble.value * currency.value.rub.xcd
  } else if (valuta.value === 'xcg' && currency.value.rub?.xcg) {
    return ruble.value * currency.value.rub.xcg
  } else if (valuta.value === 'xch' && currency.value.rub?.xch) {
    return ruble.value * currency.value.rub.xch
  } else if (valuta.value === 'xdc' && currency.value.rub?.xdc) {
    return ruble.value * currency.value.rub.xdc
  } else if (valuta.value === 'xdr' && currency.value.rub?.xdr) {
    return ruble.value * currency.value.rub.xdr
  } else if (valuta.value === 'xec' && currency.value.rub?.xec) {
    return ruble.value * currency.value.rub.xec
  } else if (valuta.value === 'xem' && currency.value.rub?.xem) {
    return ruble.value * currency.value.rub.xem
  } else if (valuta.value === 'xlm' && currency.value.rub?.xlm) {
    return ruble.value * currency.value.rub.xlm
  } else if (valuta.value === 'xmr' && currency.value.rub?.xmr) {
    return ruble.value * currency.value.rub.xmr
  } else if (valuta.value === 'xof' && currency.value.rub?.xof) {
    return ruble.value * currency.value.rub.xof
  } else if (valuta.value === 'xpd' && currency.value.rub?.xpd) {
    return ruble.value * currency.value.rub.xpd
  } else if (valuta.value === 'xpf' && currency.value.rub?.xpf) {
    return ruble.value * currency.value.rub.xpf
  } else if (valuta.value === 'xpt' && currency.value.rub?.xpt) {
    return ruble.value * currency.value.rub.xpt
  } else if (valuta.value === 'xrp' && currency.value.rub?.xrp) {
    return ruble.value * currency.value.rub.xrp
  } else if (valuta.value === 'xtz' && currency.value.rub?.xtz) {
    return ruble.value * currency.value.rub.xtz
  } else if (valuta.value === 'yer' && currency.value.rub?.yer) {
    return ruble.value * currency.value.rub.yer
  } else if (valuta.value === 'zar' && currency.value.rub?.zar) {
    return ruble.value * currency.value.rub.zar
  } else if (valuta.value === 'zec' && currency.value.rub?.zec) {
    return ruble.value * currency.value.rub.zec
  } else if (valuta.value === 'zil' && currency.value.rub?.zil) {
    return ruble.value * currency.value.rub.zil
  } else if (valuta.value === 'zmk' && currency.value.rub?.zmk) {
    return ruble.value * currency.value.rub.zmk
  } else if (valuta.value === 'zmw' && currency.value.rub?.zmw) {
    return ruble.value * currency.value.rub.zmw
  } else if (valuta.value === 'zwd' && currency.value.rub?.zwd) {
    return ruble.value * currency.value.rub.zwd
  } else if (valuta.value === 'zwg' && currency.value.rub?.zwg) {
    return ruble.value * currency.value.rub.zwg
  } else if (valuta.value === 'zwl' && currency.value.rub?.zwl) {
    return ruble.value * currency.value.rub.zwl
  } else {
    return ruble.value
  }
})
</script>

<template>
  <h1>TestPage</h1>
</template>
