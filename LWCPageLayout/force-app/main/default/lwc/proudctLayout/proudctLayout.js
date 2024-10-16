import { LightningElement, wire, api } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import IMAGE_URL_FIELD from '@salesforce/schema/Product2.Product_Image_ID__c'

export default class ProudctImageComponent extends LightningElement {
    @api recordId;
    productUrl;
    
    @wire(getRecord, { recordId : '$recordId', fields : [IMAGE_URL_FIELD]})
    ImageDetails({error,data})
    {
        if(data)
        {
            this.productUrl = getFieldValue(data, IMAGE_URL_FIELD);
        }
        else if(error)
        {
            console.log("상품 이미지 에러");
        }
    }
}