const BuyNowButton = ({ link }: { link: string }) => {
  return (
    <a href={link} target="_blank" className="btn btn-primary">
      Buy Now
    </a>
  )
}

export default BuyNowButton
