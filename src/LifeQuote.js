
//the step 1,2,3 title and side bar


import classnames from 'classnames'
import Col from 'react-bootstrap/lib/Col'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import React from 'react'
import Row from 'react-bootstrap/lib/Row'

import ContactModal from './modals/ContactModal'
import QAndAModal from './modals/QAndAModal'

// import {LOCAL_SALES_AGENT_URL} from './constants'
import {GlobalModal, Step} from './enums'

let STEPS = [
  // {code: Step.GENERAL_INFO, name: 'General Questions'},
  // {code: Step.QUOTE_INFO, name: 'Professional Experience'},
  // {code: Step.SEND_QUOTE, name: 'Contact Information'}
]

let StepLabel = ({active, name, step}) =>
  <Col sm={4} className={classnames({active})}>
    <span className="step-number">{step}</span>{' '}
    <span className="step-name">{name}</span>
  </Col>

let MODALSONE = [
  {
    code: GlobalModal.WE_CALL_YOU,
    glyph: 'user',
    id: 'we-call-you',
    title: "Update Profile",
    text: 'Click here to change any information you need on your profile.'
  }, ]
  let MODALSTWO = [

  {
    code: GlobalModal.EMAIL_US,
    glyph: 'road',
    id: 'email-us',
    title: 'Be a Trainer',
    text: 'Click here to build your trainer profile page so others can easily contact you.'
  }, ]

    let MODALSTHREE = [

  {
    code: GlobalModal.Q_AND_A,
    glyph: 'book',
    id: 'q-and-a',
    title: 'Get Fit',
    text: 'Select a number of pre-designed work out routines as your guide to start.'
  }
]

let ModalItem = ({code, glyph, id, onClick, title, text}) =>
  <a className="list-group-item" href={`#${id}`} onClick={(e) => { e.preventDefault(); onClick(code) }}>
    <h4 className="list-group-item-heading">
<Glyphicon glyph={glyph}/> {title}</h4>
    <p className="list-group-item-text">{text}</p>
  </a>

let LifeQuote = React.createClass({
  render() {
    let {actions, state} = this.props
    let {loading, step} = state
    return <div className={classnames({loading})}>
      <Row>
        <Col sm={12}>
          <div className="quote-progress clearfix">
            {STEPS.map(({name, code}) =>
              <StepLabel active={step === code} key={code} name={name} step={code}/>
            )}
          </div>
        </Col>
      </Row>
      <Row>
          <h3 className="text-center">- - - - -</h3>

        <Col md={4}>


          <div className="thumbnail"> <img src={require('../public/profile.png')} />
            {MODALSONE.map(modal => <ModalItem {...modal} onClick={actions.showModal}/>)}
          </div>          </Col>  
            <Col md={4}>

          <div className="thumbnail"> <img src={require('../public/trainer.png')} />
            {MODALSTWO.map(modal => <ModalItem {...modal} onClick={actions.showModal}/>)}
          </div>   </Col>
            <Col md={4}>

                    <div className="thumbnail"><img src={require('../public/getfit.png')} />
            {MODALSTHREE.map(modal => <ModalItem {...modal} onClick={actions.showModal}/>)}
          </div>  </Col>




      </Row>
          <div className="panel panel-default">
            {this.renderContent()}
          </div>
      {this.renderModal()}
    </div>
  },

  renderContent() {
        let {actions, state} = this.props
    switch (state.modal) {
      case GlobalModal.WE_CALL_YOU:
        return <ContactModal
          contactInfo={state.contactInfo}
          onExit={actions.hideModal}
          type="phone"
          updateLead={actions.updateLead}
        />
      case GlobalModal.EMAIL_US:
        return <ContactModal
          contactInfo={state.contactInfo}
          onExit={actions.hideModal}
          type="email"
          updateLead={actions.updateLead}
        />
      case GlobalModal.Q_AND_A:
        return <QAndAModal onExit={actions.hideModal}/>
      case GlobalModal.SERVICE_UNAVAILABLE:
        return <ServiceUnavailableModal onExit={actions.hideModal}/>
    }
    // let {actions, state, zipCode} = this.props
    // switch (state.step) {
    //   case Step.GENERAL_INFO:
    //     return <GeneralInfo
    //       getQuote={actions.getQuote}
    //       initialData={state.generalInfo}
    //       loading={state.loading}
    //       showModal={actions.showModal}
    //       zipCode={zipCode}
    //     />
    //   case Step.QUOTE_INFO:
    //     return <QuoteInfo
    //       changeStep={actions.changeStep}
    //       generalInfo={state.generalInfo}
    //       payments={state.payments}
    //     />
    //   case Step.SEND_QUOTE:
    //     return <SendQuote
    //       changeStep={actions.changeStep}
    //       contactInfo={state.contactInfo}
    //       updateLead={actions.updateLead}
    //     />
    //   case Step.TTFN:
    //     return <TTFN/>
    // }
  },

  renderModal() {
    // let {actions, state} = this.props
    // switch (state.modal) {
    //   case GlobalModal.WE_CALL_YOU:
    //     return <ContactModal
    //       contactInfo={state.contactInfo}
    //       onExit={actions.hideModal}
    //       type="phone"
    //       updateLead={actions.updateLead}
    //     />
    //   case GlobalModal.EMAIL_US:
    //     return <ContactModal
    //       contactInfo={state.contactInfo}
    //       onExit={actions.hideModal}
    //       type="email"
    //       updateLead={actions.updateLead}
    //     />
    //   case GlobalModal.Q_AND_A:
    //     return <QAndAModal onExit={actions.hideModal}/>
    //   case GlobalModal.SERVICE_UNAVAILABLE:
    //     return <ServiceUnavailableModal onExit={actions.hideModal}/>
    // }
  }
})

export default LifeQuote
